'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Upload, Lock, LogOut, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [loggingIn, setLoggingIn] = useState(false);
  const [authError, setAuthError] = useState('');

  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');
  const [statusType, setStatusType] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);

  // Check if already authenticated on initial page load
  useEffect(() => {
    async function checkExistingSession() {
      try {
        const res = await fetch('/api/admin/check', { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          if (data.authenticated) {
            setAuthenticated(true);
          }
        }
      } catch (err) {
        console.error('Error checking auth:', err);
      } finally {
        setCheckingAuth(false);
      }
    }
    checkExistingSession();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const trimmed = password.trim();
    if (!trimmed) {
      setAuthError('Please enter the admin password.');
      return;
    }

    setLoggingIn(true);
    setAuthError('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: trimmed }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setAuthenticated(true);
        setAuthError('');
      } else {
        setAuthenticated(false);
        setAuthError(data.error || '❌ Incorrect password. Access denied.');
      }
    } catch {
      setAuthError('❌ Network error. Please check your connection and try again.');
    } finally {
      setLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      setAuthenticated(false);
      setPassword('');
      setFiles([]);
      setPreviews([]);
      setStatusMsg('');
      setAuthError('');
    }
  };

  const handleFiles = (fileList) => {
    const arr = Array.from(fileList).filter((f) => f.type.startsWith('image/'));
    setFiles(arr);
    const newPreviews = arr.map((f) => URL.createObjectURL(f));
    setPreviews(newPreviews);
    setStatusMsg('');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      setStatusMsg('Please select at least one image.');
      setStatusType('error');
      return;
    }
    setUploading(true);
    setStatusMsg('Uploading photos...');
    setStatusType('');

    let successCount = 0;
    let failCount = 0;

    for (const file of files) {
      const formData = new FormData();
      formData.append('file', file);
      try {
        const res = await fetch('/api/upload', {
          method: 'POST',
          headers: password ? { 'x-admin-password': password } : {},
          body: formData,
        });

        if (res.ok) {
          successCount++;
        } else {
          const err = await res.json().catch(() => ({}));
          if (res.status === 401 || err.error?.includes('Unauthorized')) {
            setStatusMsg('❌ Session expired or unauthorized. Please log in again.');
            setStatusType('error');
            setAuthenticated(false);
            setUploading(false);
            return;
          }
          failCount++;
        }
      } catch {
        failCount++;
      }
    }

    setUploading(false);
    if (successCount > 0 && failCount === 0) {
      setStatusMsg(`✅ ${successCount} photo${successCount > 1 ? 's' : ''} uploaded successfully! They are now live on the gallery.`);
      setStatusType('success');
      setFiles([]);
      setPreviews([]);
    } else if (successCount > 0) {
      setStatusMsg(`⚠️ ${successCount} uploaded, ${failCount} failed.`);
      setStatusType('success');
    } else {
      setStatusMsg('❌ Upload failed. Please check your connection or credentials and try again.');
      setStatusType('error');
    }
  };

  if (checkingAuth) {
    return (
      <div className="admin-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', color: 'var(--color-text-muted)' }}>
          <Loader2 className="animate-spin" size={32} style={{ margin: '0 auto 1rem', color: 'var(--color-amber)' }} />
          <p>Verifying admin session...</p>
        </div>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="admin-page">
        <div className="admin-card" style={{ maxWidth: 420 }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <Image src="/logo.png" alt="Bhargavi Carnatic Music" width={64} height={64} style={{ margin: '0 auto 1rem' }} />
            <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <Lock size={20} style={{ color: 'var(--color-amber)' }} /> Admin Access
            </h1>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-light)' }}>
              Enter your admin password to upload photos to the gallery.
            </p>
          </div>

          <form onSubmit={handleLogin}>
            <input
              type="password"
              className="form-input"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (authError) setAuthError('');
              }}
              id="admin-password-input"
              aria-label="Admin password"
              autoFocus
              disabled={loggingIn}
              required
            />

            {authError && (
              <div
                className="upload-status error"
                style={{
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  fontSize: '0.85rem',
                }}
              >
                <AlertCircle size={16} />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary"
              id="admin-login-btn"
              disabled={loggingIn}
              style={{ width: '100%', justifyContent: 'center', gap: '0.5rem' }}
            >
              {loggingIn ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Verifying...
                </>
              ) : (
                'Unlock & Enter →'
              )}
            </button>
          </form>

          <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.82rem', color: 'var(--color-text-light)' }}>
            <Link href="/">← Back to Website</Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="admin-card">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Image src="/logo.png" alt="Admin" width={48} height={48} />
            <div>
              <h1 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>Upload Photos</h1>
              <p style={{ fontSize: '0.82rem', color: 'var(--color-text-light)' }}>Photos will appear immediately on the live gallery.</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="btn"
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.85rem',
              background: '#fef2f2',
              color: '#991b1b',
              border: '1px solid #fecaca',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              cursor: 'pointer',
              borderRadius: '0.5rem',
            }}
            title="Log out of admin session"
          >
            <LogOut size={14} /> Log Out
          </button>
        </div>

        <div
          className={`upload-zone${dragOver ? ' drag-over' : ''}`}
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          role="button"
          tabIndex={0}
          aria-label="Upload photos, click or drag and drop"
          id="upload-dropzone"
          onKeyDown={(e) => e.key === 'Enter' && fileInputRef.current?.click()}
        >
          <div className="upload-zone-icon" style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem', color: 'var(--color-amber)' }}>
            <Upload size={36} />
          </div>
          <h3>Click to Select Photos</h3>
          <p>or drag & drop images here</p>
          <p style={{ fontSize: '0.75rem', marginTop: '0.5rem', color: 'var(--color-text-light)' }}>JPG, PNG, WEBP supported · Multiple files allowed</p>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            style={{ display: 'none' }}
            onChange={(e) => handleFiles(e.target.files)}
            id="admin-file-input"
            aria-label="Select photo files to upload"
          />
        </div>

        {previews.length > 0 && (
          <div className="upload-previews">
            {previews.map((src, i) => (
              <div key={i} className="upload-preview-item">
                <img src={src} alt={`Preview ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        )}

        {statusMsg && (
          <div className={`upload-status ${statusType}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            {statusType === 'success' ? <CheckCircle2 size={16} /> : statusType === 'error' ? <AlertCircle size={16} /> : null}
            <span>{statusMsg}</span>
          </div>
        )}

        <button
          className="btn btn-primary"
          onClick={handleUpload}
          disabled={uploading || files.length === 0}
          id="admin-upload-btn"
          style={{ width: '100%', justifyContent: 'center', opacity: files.length === 0 ? 0.5 : 1, gap: '0.5rem' }}
          aria-label={uploading ? 'Uploading photos' : 'Upload selected photos'}
        >
          {uploading ? (
            <>
              <Loader2 size={16} className="animate-spin" /> Uploading...
            </>
          ) : (
            `📤 Upload ${files.length > 0 ? `${files.length} Photo${files.length > 1 ? 's' : ''}` : 'Photos'}`
          )}
        </button>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem', fontSize: '0.85rem' }}>
          <Link href="/gallery" style={{ color: 'var(--color-amber)' }}>← View Gallery</Link>
          <Link href="/" style={{ color: 'var(--color-text-light)' }}>Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
