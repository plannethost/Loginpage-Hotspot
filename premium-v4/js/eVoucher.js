document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("voucherContainer").innerHTML = `
        <div class="col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1 box-utama">
            <p class="fs-tittel mt--2 t-center tx-tittel" style="color: #5a5a5a;">INFORMASI e-VOUCHER</p>
            <div class="tx-tittel">
                <span>Untuk pembelian e-Voucher minimum pembelian Rp 10.000 <span style="font-style: italic;">(sepuluh ribu rupiah).</span> membeli paket dengan harga di bawah harga minimum,<br>
                <b>Link :</b><span style="color:#0270df;font-family:monospace; user-select:all;" onclick="copyToClipboard()">
                https://client.planetmn.com/e-voucher
              </span><br><br>Gunakan browser favoritmu.</p>
    <center>
  <img src="img/images/link_https.jpg" 
       style="max-width: 100%; 
              height: auto;
              width: 100%;
              max-width: 370px;" 
       alt="Metode Pembayaran"
       class="img-responsive">
</center>
              
              <script>
              function copyToClipboard() {
                const text = "https://client.planetmn.com/e-voucher";
                navigator.clipboard.writeText(text);
              }
              </script>
<div class="mt--2 t-center">                 
    <button type="button" class="btn navy tx-btn" data-toggle="modal" data-target="#myModal11" style="margin-right:5px;">
        <span class="glyphicon glyphicon-shopping-cart"></span>&nbsp; Beli </button>
     <button type="button" class="btn  birumuda tx-btn" data-toggle="modal" data-target="#myModal12" style="margin-left:5px;">
    <span class="glyphicon glyphicon-play-circle"></span>&nbsp; Tutorial</button>   </div>
                </span>
            </div>

            <div class="panel-group" id="accordion" style="padding:15px;">
                <span style="font-weight: 600; color: #505050;">PEMBAYARAN TERSEDIA :</span>

                ${generateAccordionItem("collapse1", "Bank Bersama", [
                    "Pada menu utama, pilih <b>Transaksi Lainnya</b>",
                    "Pilih <b>Transfer</b> ",
                    "Pilih <b>Antar Bank Online</b>",
                    "Masukkan nomor <b>(Kode Bank) 7828XXXXXXXXXXXX</b>",
                    "Akan muncul rincian pembayaran Anda. Jika sudah benar, klik <b>Ya</b> untuk melanjutkan.",
                    "Selesai"
                ])}

                ${generateAccordionItem("collapse2", "BRI Mobile", [
                    "Lakukan <b>log in</b> pada aplikasi <b>BRI Mobile</b> (Android/Iphone)",
                    "Pilih menu <b>BRIVA</b>",
                    "Pilih <b>Pembayaran Baru</b>",
                    "Masukan <b>1308-3XXX-XXXX-XXXX</b> (Nomor VA yang tertera pada halaman konfirmasi)",
                    "Masukan <b>PIN BRIMO</b> Anda",
                    "Validasi pembayaran anda",
                    "Pembayaran Selesai"
                ])}

                ${generateAccordionItem("collapse3", "Mandiri - LIVIN", [
                    "Pilih menu <b>Pembayaran</b>",
                    "Pilih menu <b>E-Commerce</b>",
                    "Pilih nama <b>duitku - 89028</b>",
                    "Masukan <b>16 digit Nomor VA</b>",
                    "Konfirmasi <b>nominal pembayaran</b>",
                    "<b>Konfirmasi</b> untuk melanjutkan",
                    "Cek status transaksi"
                ])}

                ${generateAccordionItem("collapse4", "BNI Mobile Banking", [
                    "Akses <b>BNI Mobile Banking</b>",
                    "Masukkan user <b>ID</b> dan <b>password</b>",
                    "Pilih menu <b>“Transfer”</b>", 
                    "Pilih menu <b>“Virtual Account Billing”</b> kemudian pilih rekening debet",
                    "Masukkan nomor Virtual Account Anda <b>(contoh:98886699xxxxxxxx)</b> pada menu <b>“input baru”</b>",
                    "<b>Tagihan</b> yang harus dibayarkan akan muncul pada layar konfirmasi",
                    "Konfirmasi transaksi dan masukkan <b>Password Transaksi</b>",
                    "Pembayaran Anda <b>Telah Berhasil</b>",
                    "<b>Simpan bukti</b> transaksi"
                ])}


                ${generateAccordionItem("collapse5", "Alfamart - Retail", [
                    "Catat dan simpan kode pembayaran anda",
                    "Datang ke Gerai retail <b>( Alfamart, Kantor Pos, Pegadaian, & Dan-Dan )</b>",
                    "Informasikan kepada kasir akan melakukan Pembayaran <b>Telkom/Indihome/Finpay</b>. Jika kasir menanyakan jenis pembayaran Telkom,<b>pilih pembayaran untuk Telepon Rumah atau Indihome atau Finpay</b> ",
                    "Tunjukkan dan berikan Kode Pembayaran ke Kasir",
                    "Lakukan pembayaran sesuai nominal yang diinformasikan dan tunggu proses selesai",
                    "Minta dan simpan struk sebagai bukti pembayaran",
                    "Pembayaran anda akan langsung terdeteksi secara otomatis"
                ])}

                ${generateAccordionItem("collapse6", "E-WALLET", [
                    "Dana, OVO GoPay, ShoppyPay, LinkAja"
                    
                ])}
            </div>
        <div  class="carousel-inner">
            <div class="col-md-8 col-sm-12" style="display: flex; align-items: center; justify-content: center;">
  <img src="img/images/payment_method.png" 
       style="max-width: 100%; 
              height: auto;
              width: 100%;
              max-width: 370px;" 
       alt="Metode Pembayaran"
       class="img-responsive">
</div>
</div>
      </div>  

        <div class="sedang-faq">
    <marquee scrollamount="3" style="background-color: #ff4c4c;margin-bottom: -4px;">
    <span style="color: #fff;">Kami menyediakan berbagai macam pilihan Paket Internet Murah yang bisa anda pilih
    sesuai dengan
    kebutuhan, untuk melakukan pembelian Voucher WiFi
    silahkan hubungi kami.
    Pembelian Voucher dan Info Lainnya bisa hubungi kontak layanan kami</span>
    </marquee>
    </div>
    `;
});

// Fungsi untuk membuat item accordion secara dinamis
function generateAccordionItem(id, title, items) {
    return `
        <div class="panel panel-default">
            <div class="panel-heading" style="text-align: left;">
                <a href="#${id}" class="collapsed" data-toggle="collapse" data-parent="#accordion" role="button" style="color: #7c7c7c; text-decoration: none; display: block;">
                    <b># ${title}</b>
                </a>
            </div>
            <div id="${id}" class="panel-collapse collapse">
                <div class="panel-left">
                    <p><b>Cara Pembayaran: </b></p>
                    <ul>
                        ${items.map(item => `<li>${item}</li>`).join("")}
                    </ul>
                </div>
            </div>
        </div>
    `;
}
