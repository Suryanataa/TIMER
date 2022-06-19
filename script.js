window.onload = function () {
    
    let defaultDalamSatuanDetik = ((30 * 60) + 0)
    let dalamSatuanDetik = defaultDalamSatuanDetik
    let menit = null
    let detik = null
    
    let hitungMenitDanDetik = function () {
        menit = (Math.floor(dalamSatuanDetik / 60)) || 0
        detik = (dalamSatuanDetik % 60) || 0
        
        if (menit < 10) {
            menit = '0' + menit
        }
        
        if (detik < 10) {
            detik = '0' + detik
        }
        
        if (dalamSatuanDetik < 0) {
            alert('WAKTU TELAH HABIS!')
            clearInterval(intervalJalan)
        } else {
            document.querySelector('#menit').innerHTML = menit
            document.querySelector('#detik').innerHTML = detik
        }
    }
    
    hitungMenitDanDetik()
    
    let intervalJalan = setInterval(function () {
        dalamSatuanDetik = dalamSatuanDetik - 1
        hitungMenitDanDetik()
    }, 1000)
    
    document.querySelector('#reset').addEventListener('click', function () {
        clearInterval(intervalJalan)
        
        dalamSatuanDetik = defaultDalamSatuanDetik
        hitungMenitDanDetik()
        
        intervalJalan = setInterval(function () {
            dalamSatuanDetik = dalamSatuanDetik - 1
            hitungMenitDanDetik()
        }, 1000)
    })
    
    document.querySelector('#color').addEventListener('input', function (event) {
        document.querySelector('body').style.backgroundColor = event.target.value;
    })
    
    document.querySelector('#set').addEventListener('click', function () {
        clearInterval(intervalJalan)
        
        menit = parseInt(document.querySelector('#input_menit').value) || 0
        detik = parseInt(document.querySelector('#input_detik').value) || 0
        defaultDalamSatuanDetik = (menit * 60) + detik
        dalamSatuanDetik = defaultDalamSatuanDetik
        
        intervalJalan = setInterval(function () {
            dalamSatuanDetik = dalamSatuanDetik - 1
            hitungMenitDanDetik()
        }, 1000)
        
        hitungMenitDanDetik()
    })
    alert('Selamat Datang!')
}