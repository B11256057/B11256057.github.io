function showDetailView(id) {
    let gridContainerId, detailViewId, detailContentId;
    if (id <= 8) {
        gridContainerId = 'razer-grid-container';
        detailViewId = 'razer-detail-view';
        detailContentId = 'razer-detail-content';
    } else {
        gridContainerId = 'logitech-grid-container';
        detailViewId = 'logitech-detail-view';
        detailContentId = 'logitech-detail-content';
    }

    document.getElementById(gridContainerId).style.display = 'none';
    document.getElementById(detailViewId).style.display = 'block';

    const details = {
        '1': {
            img: 'photo/1.jpg',
            title: 'Razer 雷蛇 DeathAdder V3 Pro 煉獄奎蛇 ',
            desc: 'Razer DeathAdder V3 Pro 讓你以全新風格掌握勝利的契機。',
            price: '3,990'
        },
        '2': {
            img: 'photo/2.jpg',
            title: 'Razer 雷蛇 Viper V2 PRO ',
            desc: '進化以達致勝利，Razer Viper V2 Pro 在性能與功能上大幅進化，是專業玩家的不二之選。',
            price: '4,590'
        },
        '3': {
            img: 'photo/3.jpg',
            title: 'Razer Viper V3 Pro',
            desc: 'Razer Viper V3 Pro，這是一款高性能遊戲滑鼠，採用 Razer HyperSpeed Wireless 技術，提供低延遲無線連接與極致的回應速度，是玩家追求快速反應與精準操作的最佳選擇。',
            price: '4,990'
        },
        '4': {
            img: 'photo/4.jpg',
            title: 'Razer OROCHI V2',
            desc: 'Razer Orochi V2，這是一款輕巧的無線遊戲滑鼠，具有創紀錄的超長電池壽命，適合隨時出擊。搭載第二代 Razer HyperSpeed Wireless 技術，這款滑鼠可以提供低延遲無線連接與極致的回應速度，是便攜式遊戲最佳首選。',
            price: '1,088'
        },
        '5': {
            img: 'photo/5.jpg',
            title: 'Razer Barracuda',
            desc: '產品描述 Razer Barracuda X 搭載 Razer HyperSpeed Wireless 技術，提供最低延遲的無線連接與極致的回應速度，適合任何遊戲平台。這款耳機結合了無線與有線模式，可支援 PC、PlayStation、Switch 與手機，為玩家帶來無縫的遊戲體驗。',
            price: '2,990'
        },
        '6': {
            img: 'photo/6.jpg',
            title: 'Razer Cobra Pro wireless',
            desc: 'Razer Cobra Pro，這是一款無線遊戲滑鼠，具有高性能與多功能設計，適合各種遊戲需求。這款滑鼠配備了 Razer HyperSpeed Wireless 技術，提供低延遲無線連接與極致的回應速度。',
            price: '4,299'
        },
        '7': {
            img: 'photo/7.jpg',
            title: 'Razer Basilisk V3 Pro',
            desc: 'Razer Basilisk V3 Pro，這是一款無線遊戲滑鼠，具有高性能與多功能設計，適合各種遊戲需求。這款滑鼠配備了 Razer HyperSpeed Wireless 技術，提供低延遲無線連接與極致的回應速度。',
            price: '4,490'
        },
        '8': {
            img: 'photo/8.jpg',
            title: 'Razer BlackWidow V4 75%',
            desc: 'Razer BlackWidow V4 75%，這是一款機械式鍵盤，具有高性能與多功能設計，適合各種遊戲需求。這款鍵盤配備了 Razer Green Mechanical Switches 技術，提供低延遲輸入與極致的回應速度。',
            price: '7,290'
        },
        '11': {
            img: 'photo/11.webp',
            title: 'G PRO X SUPERLIGHT 2',
            desc: '我們新一代的 PRO 滑鼠，LIGHTSPEED無線技術連線，比上一代更加快速，藉由與世界頂尖玩家合作，專為贏得競賽而設計，高達32000DPI的追蹤可靠性，以及遊戲中最先進精準的感應器，電池使用壽命長達95小時，消除您與遊戲之間的障礙。',
            price: '4,990'
        },
        '12': {
            img: 'photo/12.webp',
            title: 'G PRO X',
            desc: '重量不到 63 公克先進的低延遲 Lightspeed 無線技術。配備 HERO 25K 感應器，提供亞微米精確度。利用我們史上最輕盈、最快速的 PRO 滑鼠，掃除所有阻礙。',
            price: '2,990'
        },
        '13': {
            img: 'photo/13.webp',
            title: 'G PRO',
            desc: 'Logitech G PRO 是一款高性能的有線遊戲滑鼠，設計符合人體工學，適合長時間使用。這款滑鼠配備了 HERO 25K 感應器，提供高精度追蹤與極致的回應速度。',
            price: '1,990'
        },
        '14': {
            img: 'photo/14.webp',
            title: 'G502 X Plus',
            desc: 'Logitech G502 X Plus 是一款高性能的無線遊戲滑鼠，設計符合人體工學，適合長時間使用。這款滑鼠配備了 HERO 25K 感應器，提供高精度追蹤與極致的回應速度。',
            price: '4,490'
        },
        '15': {
            img: 'photo/15.webp',
            title: 'G502 X LIGHTSPEED',
            desc: 'Logitech G502 X LIGHTSPEED 是一款高性能的無線遊戲滑鼠，設計符合人體工學，適合長時間使用。這款滑鼠配備了 HERO 25K 感應器，提供高精度追蹤與極致的回應速度。',
            price: '2,990'
        },
        '16': {
            img: 'photo/16.webp',
            title: 'G304',
            desc: 'Logitech G304 是一款高性能的無線遊戲滑鼠，設計符合人體工學，適合長時間使用。這款滑鼠配備了 HERO 25K 感應器，提供高精度追蹤與極致的回應速度。',
            price: '990'
        },
        '17': {
            img: 'photo/17.webp',
            title: 'G PRO X 2 LIGHTSPEED',
            desc: 'PRO X 2 LIGHTSPEED 耳機麥克風具有適用於最劇烈競爭的專業等級聲音、LIGHTSPEED 無線技術以及卓越的舒適性。 藉由石墨烯單體帶來的身臨其境因場，聽清每一個腳步聲、每一個動靜和槍機拉柄的拉動動作。',
            price: '6,990'
        },
        '18': {
            img: 'photo/18.webp',
            title: 'G PRO X 60',
            desc: 'Logitech G PRO X 60 職業機械式60% 電競鍵盤主要是針對射擊遊戲設計，採用傳統的高軸鍵帽搭配OPTICAL SWITCHES 光學鍵軸，來讓玩家獲得傳統機械鍵盤敲擊手感的同時，卻不會有機械鍵軸金屬疲乏所產生的連點問題，在整體鍵軸壽命比起傳統機械鍵盤提升一倍左右。',
            price: '6,490'
        }
    };

    const detail = details[id];
    document.getElementById(detailContentId).innerHTML = `
        <img src="${detail.img}" alt="${detail.title}">
        <h2>${detail.title}</h2>
        <p>${detail.desc}</p>
        <p style="color: red;">價格: ${detail.price}</p>
    `;
}

function showGridView(brand) {
    let gridContainerId, detailViewId;
    if (brand === 'razer') {
        gridContainerId = 'razer-grid-container';
        detailViewId = 'razer-detail-view';
    } else {
        gridContainerId = 'logitech-grid-container';
        detailViewId = 'logitech-detail-view';
    }

    document.getElementById(gridContainerId).style.display = 'grid';
    document.getElementById(detailViewId).style.display = 'none';
}
