import { useState } from 'react';
import { useAuthStore } from '../../store/authStore.js';
import { nanoid } from '../../utils/nanoid.js';

const allowedTypes = ['application/pdf', 'text/plain', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

const FileLibraryManager = () => {
  const currentUser = useAuthStore((state) => state.currentUser);
  const updateUser = useAuthStore((state) => state.updateUser);
  const [error, setError] = useState(null);

  const handleUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!allowedTypes.includes(file.type)) {
      setError('Yalnızca PDF, TXT ve DOCX dosyaları desteklenir.');
      return;
    }
    setError(null);
    const reader = new FileReader();
    reader.onload = () => {
      const newAsset = {
        id: nanoid(),
        name: file.name,
        type: file.type,
        size: `${(file.size / 1024).toFixed(1)} KB`,
        uploadedAt: new Date().toISOString(),
        preview: typeof reader.result === 'string' ? reader.result.slice(0, 200) : '',
      };
      updateUser({ mediaLibrary: [...(currentUser?.mediaLibrary || []), newAsset] });
    };
    reader.readAsText(file);
  };

  const removeAsset = (assetId) => {
    updateUser({ mediaLibrary: (currentUser?.mediaLibrary || []).filter((asset) => asset.id !== assetId) });
  };

  return (
    <div className="glass-panel" style={{ padding: '2rem', display: 'grid', gap: '1rem' }}>
      <div>
        <h3>Dosya Merkezi</h3>
        <p style={{ color: 'rgba(148, 163, 184, 0.75)' }}>
          PDF, TXT ve DOCX dosyalarınızı yükleyerek Cortex asistanına bağlam sağlayabilirsiniz. İçerikler gizli ve
          şifreli tutulur.
        </p>
      </div>
      <label
        style={{
          border: '2px dashed rgba(148, 163, 184, 0.3)',
          borderRadius: '18px',
          padding: '1.5rem',
          textAlign: 'center',
          cursor: 'pointer',
          display: 'grid',
          gap: '0.5rem',
        }}
      >
        <span style={{ fontWeight: 600 }}>Dosya yüklemek için tıklayın</span>
        <span style={{ color: 'rgba(148, 163, 184, 0.7)', fontSize: '0.85rem' }}>PDF, TXT, DOCX • Maks 10MB</span>
        <input type="file" accept=".pdf,.txt,.docx" onChange={handleUpload} style={{ display: 'none' }} />
      </label>
      {error && <p style={{ color: '#f87171' }}>{error}</p>}
      <div style={{ display: 'grid', gap: '0.75rem' }}>
        {(currentUser?.mediaLibrary || []).map((asset) => (
          <div
            key={asset.id}
            style={{
              padding: '1rem',
              borderRadius: '14px',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              background: 'rgba(15, 23, 42, 0.6)',
              display: 'grid',
              gap: '0.5rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong>{asset.name}</strong>
                <p style={{ margin: 0, color: 'rgba(148, 163, 184, 0.7)', fontSize: '0.8rem' }}>
                  {asset.type} • {asset.size}
                </p>
              </div>
              <button
                type="button"
                onClick={() => removeAsset(asset.id)}
                style={{
                  border: '1px solid rgba(248, 113, 113, 0.3)',
                  background: 'rgba(248, 113, 113, 0.1)',
                  borderRadius: '12px',
                  padding: '0.5rem 0.85rem',
                  color: '#f87171',
                  cursor: 'pointer',
                }}
              >
                Kaldır
              </button>
            </div>
            {asset.preview && (
              <p style={{ color: 'rgba(148, 163, 184, 0.7)', fontSize: '0.85rem' }}>
                Önizleme: {asset.preview}...
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileLibraryManager;
