function showDetailView(id) {
    document.getElementById('grid-container').style.display = 'none';
    document.getElementById('detail-view').style.display = 'block';


    const details = {
        '1': {
            img: 'photo/1.jpg',
            title: 'Razer 雷蛇 DeathAdder V3 Pro 煉獄奎蛇 ',
            desc: 'Razer DeathAdder V3 Pro 讓你以全新風格掌握勝利。由頂級電競職業選手協助調整與打造，滑鼠標誌性的人體工學外型設計現在比上一代產品更輕 25% 以上，並搭載一系列先進技術，推動電競遊戲的極限。',
            price: '$3990'
        },

        '2': {
            img: 'photo/2.jpg',
            title: 'Razer Viper V2 PRO',
            desc: '全新的頂級掠食者在電競圈現身。繼 Razer Viper Ultimate 後的新款設計，我們的最新進化版滑鼠重量更輕了 20% 以上，並具備全方位升級的強化功能。這款滑鼠是最輕的無線遊戲滑鼠之一，讓你的勝利之路完全沒有阻礙。.',
            price: '$3990'
        },

        '3': {
            img: 'photo/3.jpg',
            title: 'Razer Viper V3 Pro',
            desc: '史上最佳的無線電競滑鼠–強勢回歸·重塑戰局·採用超輕量設計·並搭載同級產品中最先進的技術,專為專業玩家打造的 Razer Viper V3 Pro· 是追求巔峰效能和最佳操控無席置疑的選擇,是你絕對可以信賴的完美武器。',
            price: '$4,990'
        },

        '4': {
            img: 'photo/4.jpg',
            title: 'Razer OROCHI V2',
            desc: '隆重介紹 Razer Orochi V2 — 這是小巧、超輕量的無線遊戲滑鼠，具有超越所有對手的最長電池續航力。具備 Razer HyperSpeed Wireless 與藍牙模式，是你四處征戰的最佳夥伴。',
            price: '$1,088'
        },

        '5': {
            img: 'photo/5.jpg',
            title: 'Razer Barracuda',
            desc: '無論你在室內或戶外，專為在家遊戲與外出娛樂所設計的 Razer Barracuda 無線混合式耳麥，都能讓你擁有相同的體驗。搭配整合式波束賦形抗噪麥克風，在任何環境下都能享受清晰透亮的語音收音效果。採用智慧雙無線設計，可順暢地在家中高效能遊戲和外出行動使用之間便利切換。',
            price: '$2,990'
        },

        '6': {
            img: 'photo/6.jpg',
            title: 'Razer Cobra Pro wireless',
            desc: '備 Razer Chroma RGB 功能的無線遊戲滑鼠 Razer Cobra Pro 助你輕鬆迎戰，技驚四座。搭載 Razer HyperSpeed Wireless 及 11 個可個別編程的發光區域，讓你自由設定燈光效果，享受更具沉浸感的遊戲體驗。',
            price: '$4,299'
        },

        '7': {
            img: 'photo/7.jpg',
            title: 'Razer Basilisk V3 Pro',
            desc: '王者回歸，勢如破竹。最先進的遊戲滑鼠鄭重登場：Razer Basilisk V3 Pro。這款滑鼠採用領先業界的技術，提供極限的效能、自訂功能、連接和控制能力，釋放你的最大潛力。',
            price: '$4,490'
        },

        '8': {
            img: 'photo/8.jpg',
            title: 'Razer BlackWidow V4 75%',
            desc: 'Razer BlackWidow V4 75% 是精簡的熱插拔機械式鍵盤，採用 Razer Chroma RGB 技術，專為追求更多自訂選項和更深入沉浸體驗的使用者打造，滿足你的狂熱需求。從安裝新按鍵軸到打造獨特燈光效果，你可以依照喜愛的遊玩方式打造專屬鍵盤。',
            price: '$7,290'
        },
    };

    const detail = details[id];
    const detailContent = `
        <img src="${detail.img}" alt="${detail.title}">
        <h2>${detail.title}</h2>
        <br>
        <p>${detail.desc}</p>
        <h2>價格: ${detail.price}</h1>
    `;
    document.getElementById('detail-content').innerHTML = detailContent;
}

function showGridView() {
    document.getElementById('detail-view').style.display = 'none';
    document.getElementById('grid-container').style.display = 'grid';
}