'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Upload } from 'lucide-react';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');
  const [statusType, setStatusType] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    // Password is validated server-side; for UX we do a quick check by trying a small request
    if (!password.trim()) {
      setAuthError('Please enter a password.');
      return;
    }
    setAuthenticated(true);
    setAuthError('');
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
    setStatusMsg('Uploading...');
    setStatusType('');

    let successCount = 0;
    let failCount = 0;

    for (const file of files) {
      const formData = new FormData();
      formData.append('file', file);
      try {
        const res = await fetch('/api/upload', {
          method: 'POST',
          headers: { 'x-admin-password': password },
          body: formData,
        });
        if (res.ok) {
          successCount++;
        } else {
          const err = await res.json();
          if (err.error === 'Unauthorized') {
            setStatusMsg('❌ Wrong password. Please refresh and try again.');
            setStatusType('error');
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
      setStatusMsg('❌ Upload failed. Please check your connection and try again.');
      setStatusType('error');
    }
  };

  if (!authenticated) {
    return (
      <div className="admin-page">
        <div className="admin-card" style={{ maxWidth: 420 }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <Image src="/logo.png" alt="Bhargavi Carnatic Music" width={64} height={64} style={{ margin: '0 auto 1rem' }} />
            <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Admin Access</h1>
            <p>Enter your password to upload photos to the gallery.</p>
          </div>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              className="form-input"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="admin-password-input"
              aria-label="Admin password"
              required
            />
            {authError && (
              <div className="upload-status error" style={{ marginBottom: '1rem' }}>{authError}</div>
            )}
            <button type="submit" className="btn btn-primary" id="admin-login-btn" style={{ width: '100%', justifyContent: 'center' }}>
              Login →
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
          <Image src="/logo.png" alt="Admin" width={48} height={48} />
          <div>
            <h1 style={{ fontSize: '1.6rem', marginBottom: '0.2rem' }}>Upload Photos</h1>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)' }}>Photos will appear immediately on the live gallery.</p>
          </div>
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
          <div className={`upload-status ${statusType}`}>{statusMsg}</div>
        )}

        <button
          className="btn btn-primary"
          onClick={handleUpload}
          disabled={uploading || files.length === 0}
          id="admin-upload-btn"
          style={{ width: '100%', justifyContent: 'center', opacity: files.length === 0 ? 0.5 : 1 }}
          aria-label={uploading ? 'Uploading photos' : 'Upload selected photos'}
        >
          {uploading ? '⏳ Uploading...' : `📤 Upload ${files.length > 0 ? `${files.length} Photo${files.length > 1 ? 's' : ''}` : 'Photos'}`}
        </button>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem', fontSize: '0.85rem' }}>
          <Link href="/gallery" style={{ color: 'var(--color-amber)' }}>← View Gallery</Link>
          <Link href="/" style={{ color: 'var(--color-text-light)' }}>Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
