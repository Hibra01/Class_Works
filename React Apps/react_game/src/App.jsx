import './App.css';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [category, setCategory] = useState('rpg');
  const [images, setImages] = useState({});
  const [isGenerated, setIsGenerated] = useState(false);
  const [selectedCells, setSelectedCells] = useState([]); // Tıklanan hücrelerin bilgileri
  const [score, setScore] = useState(0); // Skor

  const allImagesRPG = Array.from({ length: 500 }, (_, i) => i + 1);
  const allImagesRPGItems = Array.from({ length: 154 }, (_, i) => i + 1);

  const clickSound = useRef(null); // Tıklama ses referansı
  const confirmSound = useRef(null); // Onay ses referansı

  // Sayfa ilk açıldığında sesi tetikle
  useEffect(() => {
    clickSound.current.play(); // Sayfa açıldığında click sesini çal
  }, []);

  function getRandomImages() {
    const selectedImages = [];
    const availableImages = category === 'rpg' ? [...allImagesRPG] : [...allImagesRPGItems];
    for (let i = 0; i < 16; i++) {
      const randomIndex = Math.floor(Math.random() * availableImages.length);
      selectedImages.push(availableImages[randomIndex]);
      availableImages.splice(randomIndex, 1);
    }
    return selectedImages;
  }

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  const generateImages = () => {
    const selectedImages = getRandomImages();
    const table1Images = [...selectedImages];
    const table2Images = [...selectedImages];

    shuffleArray(table1Images);
    shuffleArray(table2Images);

    setImages({ table1: table1Images, table2: table2Images });
    setIsGenerated(true);
  };

  useEffect(() => {
    generateImages();

    const updateBackground = () => {
      if (category === 'rpg') {
        document.body.style.backgroundImage = 'url(../src/assets/images/rpg-background.jpg)';
      } else if (category === 'rpg-items') {
        document.body.style.backgroundImage = 'url(../src/assets/images/rpg-items-background.jpg)';
      }
    };

    updateBackground();
  }, [category]);

  const handleCellClick = (table, index) => {
    const newSelectedCell = { table, index };
    const updatedSelectedCells = [...selectedCells];

    // Eğer bu hücre zaten seçildiyse, onu deselect yap
    const existingIndex = selectedCells.findIndex(
      (cell) => cell.table === table && cell.index === index
    );

    if (existingIndex !== -1) {
      // Hücre zaten seçilmişse, tıklanan hücreyi diziden çıkar
      updatedSelectedCells.splice(existingIndex, 1);
    } else {
      // Eğer yeni bir hücre tıklanmışsa, onu ekle
      updatedSelectedCells.push(newSelectedCell);
    }

    if (updatedSelectedCells.length === 2) {
      const [first, second] = updatedSelectedCells;

      // Eğer aynı tablo seçilmişse, işlem sıfırlanacak
      if (first.table === second.table) {
        setSelectedCells([newSelectedCell]); // sadece yeni seçilen hücreyi tut
      } else {
        // Farklı tablolarda ve aynı görselde olanları kontrol et
        if (
          first.table !== second.table && // Farklı tablolardan olmalı
          images[first.table][first.index] === images[second.table][second.index] // Aynı görsel olmalı
        ) {
          // Görüntüyü kaldırmak için 1 saniye bekle
          setTimeout(() => {
            const updatedImages = { ...images };
            updatedImages[first.table][first.index] = null; // Görüntüyü kaldır
            updatedImages[second.table][second.index] = null; // Görüntüyü kaldır
            setImages(updatedImages);

            // Skoru artır
            setScore(prevScore => prevScore + 1);

            // Görüntüler kaldırıldıktan sonra onay sesini çal
            confirmSound.current.play();
          }, 1000); // 1 saniye sonra işlemi yap
        }
        setSelectedCells([]); // Seçimi sıfırla
      }
    } else {
      setSelectedCells(updatedSelectedCells);
    }
  };

  // Tablo tüm hücreleri boşaldığında yeni tablolar oluştur
  useEffect(() => {
    if (images.table1 && images.table2) {
      const allImagesCleared = [
        ...images.table1,
        ...images.table2
      ].every(img => img === null); // Bütün görsellerin silindiğini kontrol et

      if (allImagesCleared) {
        // Eğer tüm img'ler silindiyse, tabloları yeniden oluştur
        setScore(prevScore => prevScore); // Skoru sıfırlama
        generateImages();
      }
    }
  }, [images]);

  const playClickSound = () => {
    clickSound.current.play(); // Tıklama sesini çal
  };

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

        {/* Tıklama ve onay sesleri */}
        <audio ref={clickSound} src="../src/assets/sounds/click-sound.mp3" />
        <audio ref={confirmSound} src="../src/assets/sounds/confirm-sound.mp3" />

        {isGenerated && (
          <div className="game-main">
            <div className='score'>Score: {score}</div>
            <div className="tables">
              <table id="table1">
                <tbody>
                  {Array.from({ length: 4 }).map((_, i) => (
                    <tr key={`table1-row-${i}`}>
                      {Array.from({ length: 4 }).map((_, j) => {
                        const cellIndex = i * 4 + j;
                        return (
                          <td
                            key={`table1-cell-${cellIndex}`}
                            onClick={() => handleCellClick('table1', cellIndex)}
                            onMouseEnter={playClickSound} // Hücreye gelince sesi çal
                            className={
                              selectedCells.some(
                                (cell) => cell.table === 'table1' && cell.index === cellIndex
                              )
                                ? 'clicked'
                                : ''
                            }
                          >
                            {images.table1 && images.table1[cellIndex] && (
                              <img
                                src={`../src/assets/images/${category}/${images.table1[cellIndex]}.png`}
                                alt=""
                              />
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>

              <table id="table2">
                <tbody>
                  {Array.from({ length: 4 }).map((_, i) => (
                    <tr key={`table2-row-${i}`}>
                      {Array.from({ length: 4 }).map((_, j) => {
                        const cellIndex = i * 4 + j;
                        return (
                          <td
                            key={`table2-cell-${cellIndex}`}
                            onClick={() => handleCellClick('table2', cellIndex)}
                            onMouseEnter={playClickSound} // Hücreye gelince sesi çal
                            className={
                              selectedCells.some(
                                (cell) => cell.table === 'table2' && cell.index === cellIndex
                              )
                                ? 'clicked'
                                : ''
                            }
                          >
                            {images.table2 && images.table2[cellIndex] && (
                              <img
                                src={`../src/assets/images/${category}/${images.table2[cellIndex]}.png`}
                                alt=""
                              />
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default App;
