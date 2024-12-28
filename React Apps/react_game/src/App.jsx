import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [category, setCategory] = useState('rpg');
  const [images, setImages] = useState([]);
  const [isGenerated, setIsGenerated] = useState(false);

  const allImagesRPG = Array.from({ length: 154 }, (_, i) => i + 1); // RPG karakterleri için görseller
  const allImagesRPGItems = Array.from({ length: 154 }, (_, i) => i + 1); // RPG item'leri için görseller

  // Görsel dizisinden rastgele 16 tane görsel seç
  function getRandomImages() {
    const selectedImages = [];
    const availableImages = category === 'rpg' ? [...allImagesRPG] : [...allImagesRPGItems]; // Kategoriye göre görsel dizisini seç
    for (let i = 0; i < 16; i++) {
      const randomIndex = Math.floor(Math.random() * availableImages.length);
      selectedImages.push(availableImages[randomIndex]);
      availableImages.splice(randomIndex, 1); // Seçilen görseli diziden çıkar
    }
    return selectedImages;
  }

  // Görselleri karıştırmak için Fisher-Yates algoritması
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Yer değiştir
    }
  }

  // Resimleri oluşturma ve karıştırma işlemi
  const generateImages = () => {
    const selectedImages = getRandomImages();
    const table1Images = [...selectedImages];
    const table2Images = [...selectedImages];

    shuffleArray(table1Images);
    shuffleArray(table2Images);

    setImages({ table1: table1Images, table2: table2Images });
    setIsGenerated(true); // Generate butonuna basıldığını işaretle
  };

  // Sayfa yüklendiğinde otomatik olarak 'Generate' işlemi başlasın
  useEffect(() => {
    generateImages(); // İlk yüklemede otomatik olarak 'Generate' çalıştırılır

    // Kategori değiştiğinde body background'ını değiştir
    const updateBackground = () => {
      if (category === 'rpg') {
        document.body.style.backgroundImage = 'url(../src/assets/images/rpg-background.jpg)';
      } else if (category === 'rpg-items') {
        document.body.style.backgroundImage = 'url(../src/assets/images/rpg-items-background.jpg)';
      }
    };

    updateBackground();
  }, [category]);

  return (
    <section id="game-main">
      <div className="container">
        <div className="category-selector">
          <select onChange={(e) => setCategory(e.target.value)} value={category}>
            <option value="rpg">RPG Characters</option>
            <option value="rpg-items">RPG Items</option>
          </select>
          <button onClick={generateImages}>Generate</button>
        </div>


        {isGenerated && (
          <div className="game-main">
            <table id="table1">
              <tbody>
                {Array.from({ length: 4 }).map((_, i) => (
                  <tr key={`table1-row-${i}`}>
                    <td>
                      <img
                        src={`../src/assets/images/${category}/${images.table1[i * 4]}.png`}
                        alt=""
                      />
                    </td>
                    <td>
                      <img
                        src={`../src/assets/images/${category}/${images.table1[i * 4 + 1]}.png`}
                        alt=""
                      />
                    </td>
                    <td>
                      <img
                        src={`../src/assets/images/${category}/${images.table1[i * 4 + 2]}.png`}
                        alt=""
                      />
                    </td>
                    <td>
                      <img
                        src={`../src/assets/images/${category}/${images.table1[i * 4 + 3]}.png`}
                        alt=""
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <table id="table2">
              <tbody>
                {Array.from({ length: 4 }).map((_, i) => (
                  <tr key={`table2-row-${i}`}>
                    <td>
                      <img
                        src={`../src/assets/images/${category}/${images.table2[i * 4]}.png`}
                        alt=""
                      />
                    </td>
                    <td>
                      <img
                        src={`../src/assets/images/${category}/${images.table2[i * 4 + 1]}.png`}
                        alt=""
                      />
                    </td>
                    <td>
                      <img
                        src={`../src/assets/images/${category}/${images.table2[i * 4 + 2]}.png`}
                        alt=""
                      />
                    </td>
                    <td>
                      <img
                        src={`../src/assets/images/${category}/${images.table2[i * 4 + 3]}.png`}
                        alt=""
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}

export default App;
