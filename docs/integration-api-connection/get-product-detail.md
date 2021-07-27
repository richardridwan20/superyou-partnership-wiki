---
sidebar_position: 2
---

# Get Product Detail

![Diagram](/img/get-product-detail.png)

You can find the documentation of the API Flow connection in here:
**[API Documentation (Swagger)](https://staging-partnership.superyou.co.id/partner/docs)**

## Getting the Product

This feature enables you to create a new transaction using the minimum data required and get quotation URL as the result.

**Endpoint: **

`{base-url}/api/v1/products/slug/{product_slug}/?gender={gender}&dob={dob}&is_cashless={is_cashless}`

**Payload:**

| Key      | Rule | Type | Description | Example | 
| ----------- | ----------- | ----------- | ----------- | ----------- |
| **product_slug** | _required_ | _string_ | Slug of the insurance product | super-care-protection
| **is_cashless** | _optional_ | _boolean_ | Specify cashless claim product | true / false (default: true if null)
| **gender** | _optional_ | _string_ | Specify male or female for gender specific product | male / female
| **dob** | _optional_ | _string_ | Specify date of birth for premium calculation | 2001-12-31 - **yyyy-mm-dd**

**Response:**
```json title="success"
{
  "slug": "super-care-protection",
  "name": "Super Care Protection",
  "parent_id": "",
  "is_active": true,
  "featured": false,
  "bundling_with_rider": false,
  "subheading": "Perawatan 30 Penyakit Menular & Kecelakaan",
  "summary": "Perlindungan biaya rawat jalan dan rawat inap untuk 30+ penyakit menular/infeksi dan kecelakaan. Tersedia pula pilihan sistem klaim cashless.",
  "description": "<div>Perlindungan biaya rawat jalan dan rawat inap untuk 30+ penyakit menular/infeksi dan kecelakaan. Tersedia pula pilihan sistem klaim cashless.</div>",
  "icon_svg": "https://staging.superyou.co.id/products/super-care-protection.svg",
  "icon_etc": "https://staging.superyou.co.id/products/super-care-protection.png",
  "rip_link": "https://staging.superyou.co.id/products/rip/super-care-protection.pdf",
  "product_type": "basic",
  "coverage_period": "1",
  "covid_coverage": false,
  "id": "9b6cd5a9-2666-4303-98df-eae25ae8c2d5",
  "start_age_from": 0,
  "start_premium_from": 45000,
  "category": {
    "name": "Original Product",
    "id": "d3aea102-e91d-4661-ae9f-cc6b6cd275e0"
  },
  "insurance_type": {
    "name": "Asuransi Jiwa + Kesehatan",
    "id": "bdca98d0-27cb-42e8-a4fe-f1dc751e7bd6"
  },
  "riders": [],
  "benefit_groups": [
    {
      "name": "Perlindungan untuk Penyakit Menular",
      "tooltip_text": "Penyakit menular/infeksi yang dimaksud dalam Super Care antara lain Demam Berdarah, Tifus, Kolera, Difteri; Rabies, Tetanus, Cacar Air, Flu Burung yang disebabkan oleh virus influenza H5N1, H9N2, H7N7, H7N9, atau H1N1, Gondongan, Rubella, Tuberkulosis, Campak, Malaria, Infeksi Antraks, Demam Kuning, Penyakit Pes, Melioidosis, Penyakit Legionnaires, Chikungunya, Ensefalitis virus Nipah, Ensefalitis virus Jepang, Variant Creutzfeldt-Jakob disease (vCJD) atau “penyakit sapi gila”, SARS MERS-CoV, Virus Zika, Ebola, Hand Foot and Mouth Disease (HFMD), COVID-19 (Pilihan) dan infeksi lainnya.",
      "order": 1,
      "id": "cee02237-ef7b-434a-a58a-9b58b6d43bbb",
      "benefits": [
        {
          "id": "a4d5b2c2-1203-4bc3-a26a-0aa3b51ef8ef",
          "name": "Biaya Perawatan Rumah Sakit",
          "product_benefit_group_id": "cee02237-ef7b-434a-a58a-9b58b6d43bbb",
          "icon_etc": "https://staging.superyou.co.id/products/benefits/super-care-protection1.png",
          "tooltip_text": "",
          "order": 1,
          "product_id": "9b6cd5a9-2666-4303-98df-eae25ae8c2d5",
          "benefit": "<div>Penggantian biaya medis rawat inap dan/atau rawat jalan hingga <b>Rp50 Juta</b> per Penyakit.</div>",
          "icon_svg": "https://staging.superyou.co.id/products/benefits/super-care-protection1.svg",
          "tooltip_text_description": null,
          "product_benefit_group": {
            "tooltip_text": "Penyakit menular/infeksi yang dimaksud dalam Super Care antara lain Demam Berdarah, Tifus, Kolera, Difteri; Rabies, Tetanus, Cacar Air, Flu Burung yang disebabkan oleh virus influenza H5N1, H9N2, H7N7, H7N9, atau H1N1, Gondongan, Rubella, Tuberkulosis, Campak, Malaria, Infeksi Antraks, Demam Kuning, Penyakit Pes, Melioidosis, Penyakit Legionnaires, Chikungunya, Ensefalitis virus Nipah, Ensefalitis virus Jepang, Variant Creutzfeldt-Jakob disease (vCJD) atau “penyakit sapi gila”, SARS MERS-CoV, Virus Zika, Ebola, Hand Foot and Mouth Disease (HFMD), COVID-19 (Pilihan) dan infeksi lainnya.",
            "id": "cee02237-ef7b-434a-a58a-9b58b6d43bbb",
            "order": 1,
            "name": "Perlindungan untuk Penyakit Menular"
          }
        },
        {
          "id": "ebd7a98f-f7da-46c2-8dd5-08149f707836",
          "name": "Perlindungan COVID-19 (Pilihan)",
          "product_benefit_group_id": "cee02237-ef7b-434a-a58a-9b58b6d43bbb",
          "icon_etc": "https://staging.superyou.co.id/products/benefits/super-care-protection2.png",
          "tooltip_text": "",
          "order": 2,
          "product_id": "9b6cd5a9-2666-4303-98df-eae25ae8c2d5",
          "benefit": "<div>Penggantian biaya medis Rawat Inap dan/atau Rawat Jalan hingga <b>Rp50 Juta</b> bila didiagnosis COVID-19 atau santunan tunai harian rawat inap sebesar <b>Rp1 Juta</b> per hari dengan maksimal perawatan 30 Hari per Tahun Polis. </div>",
          "icon_svg": "https://staging.superyou.co.id/products/benefits/super-care-protection2.svg",
          "tooltip_text_description": null,
          "product_benefit_group": {
            "tooltip_text": "Penyakit menular/infeksi yang dimaksud dalam Super Care antara lain Demam Berdarah, Tifus, Kolera, Difteri; Rabies, Tetanus, Cacar Air, Flu Burung yang disebabkan oleh virus influenza H5N1, H9N2, H7N7, H7N9, atau H1N1, Gondongan, Rubella, Tuberkulosis, Campak, Malaria, Infeksi Antraks, Demam Kuning, Penyakit Pes, Melioidosis, Penyakit Legionnaires, Chikungunya, Ensefalitis virus Nipah, Ensefalitis virus Jepang, Variant Creutzfeldt-Jakob disease (vCJD) atau “penyakit sapi gila”, SARS MERS-CoV, Virus Zika, Ebola, Hand Foot and Mouth Disease (HFMD), COVID-19 (Pilihan) dan infeksi lainnya.",
            "id": "cee02237-ef7b-434a-a58a-9b58b6d43bbb",
            "order": 1,
            "name": "Perlindungan untuk Penyakit Menular"
          }
        },
        {
          "id": "4b507426-cb44-4fef-b9eb-588281da438a",
          "name": "Santunan Kematian",
          "product_benefit_group_id": "cee02237-ef7b-434a-a58a-9b58b6d43bbb",
          "icon_etc": "https://staging.superyou.co.id/products/benefits/super-care-protection3.png",
          "tooltip_text": "",
          "order": 3,
          "product_id": "9b6cd5a9-2666-4303-98df-eae25ae8c2d5",
          "benefit": "<div>Mendapat Uang Pertanggungan hingga <b>Rp200 Juta</b> apabila meninggal dunia akibat kecelakaan selama Masa Pertanggungan.</div>",
          "icon_svg": "https://staging.superyou.co.id/products/benefits/super-care-protection3.svg",
          "tooltip_text_description": null,
          "product_benefit_group": {
            "tooltip_text": "Penyakit menular/infeksi yang dimaksud dalam Super Care antara lain Demam Berdarah, Tifus, Kolera, Difteri; Rabies, Tetanus, Cacar Air, Flu Burung yang disebabkan oleh virus influenza H5N1, H9N2, H7N7, H7N9, atau H1N1, Gondongan, Rubella, Tuberkulosis, Campak, Malaria, Infeksi Antraks, Demam Kuning, Penyakit Pes, Melioidosis, Penyakit Legionnaires, Chikungunya, Ensefalitis virus Nipah, Ensefalitis virus Jepang, Variant Creutzfeldt-Jakob disease (vCJD) atau “penyakit sapi gila”, SARS MERS-CoV, Virus Zika, Ebola, Hand Foot and Mouth Disease (HFMD), COVID-19 (Pilihan) dan infeksi lainnya.",
            "id": "cee02237-ef7b-434a-a58a-9b58b6d43bbb",
            "order": 1,
            "name": "Perlindungan untuk Penyakit Menular"
          }
        }
      ]
    },
    {
      "name": "Perlindungan untuk Kecelakaan",
      "tooltip_text": "Kecelakaan adalah suatu peristiwa atau kejadian mendadak dan tak terduga yang terjadi selama masa berlakunya asuransi yang menyebabkan cedera. Kecelakaan yang dimaksud dalam Super Care yaitu akibat terorisme, pembajakan, pembunuhan, penyerangan, bencana alam, menghirup asap, asap beracun, gas, tenggelam secara tidak sengaja,keracunan makanan, partisipasi dalam kegiatan rekreasi dan/atau olahraga apapun. Baca info selengkapnya pada Ringkasan Informasi Produk.",
      "order": 2,
      "id": "6af87dc3-a48c-46ed-b2e3-def3232c5667",
      "benefits": [
        {
          "id": "8b468f27-f21d-41ad-b5ab-2b034b7cd2d2",
          "name": "Biaya Perawatan Rumah Sakit ",
          "product_benefit_group_id": "6af87dc3-a48c-46ed-b2e3-def3232c5667",
          "icon_etc": "https://staging.superyou.co.id/products/benefits/super-care-protection4.png",
          "tooltip_text": "",
          "order": 4,
          "product_id": "9b6cd5a9-2666-4303-98df-eae25ae8c2d5",
          "benefit": "<div>Penggantian biaya medis rawat inap dan/atau rawat jalan hingga <b>Rp50 Juta</b> per Kecelakaan. Jika mengalami Kecelakaan di luar Indonesia, maka akan mendapat penggantian biaya medis <b>2x</b> dari batas manfaat.</div>",
          "icon_svg": "https://staging.superyou.co.id/products/benefits/super-care-protection4.svg",
          "tooltip_text_description": null,
          "product_benefit_group": {
            "tooltip_text": "Kecelakaan adalah suatu peristiwa atau kejadian mendadak dan tak terduga yang terjadi selama masa berlakunya asuransi yang menyebabkan cedera. Kecelakaan yang dimaksud dalam Super Care yaitu akibat terorisme, pembajakan, pembunuhan, penyerangan, bencana alam, menghirup asap, asap beracun, gas, tenggelam secara tidak sengaja,keracunan makanan, partisipasi dalam kegiatan rekreasi dan/atau olahraga apapun. Baca info selengkapnya pada Ringkasan Informasi Produk.",
            "id": "6af87dc3-a48c-46ed-b2e3-def3232c5667",
            "order": 2,
            "name": "Perlindungan untuk Kecelakaan"
          }
        },
        {
          "id": "ba5f1180-8ddb-4b14-8b9f-e0b619ae76f4",
          "name": "Biaya Pembedahan Gigi & Bedah Rekonstruktif",
          "product_benefit_group_id": "6af87dc3-a48c-46ed-b2e3-def3232c5667",
          "icon_etc": "https://staging.superyou.co.id/products/benefits/super-care-protection5.png",
          "tooltip_text": "Bedah rekonstruktif adalah tindakan bedah yang dilakukan untuk mengembalikan penampilan atau fungsi semula dari bagian tubuh tertentu dan dilakukan untuk memperbaiki cacat pada tubuh yang disebabkan oleh penyakit atau trauma.",
          "order": 5,
          "product_id": "9b6cd5a9-2666-4303-98df-eae25ae8c2d5",
          "benefit": "<div>Penggantian biaya pembedahan gigi dan/atau bedah rekonstruktif pada wajah, leher, kepala, atau dada hingga <b>Rp10 Juta</b> per Kecelakaan.</div>",
          "icon_svg": "https://staging.superyou.co.id/products/benefits/super-care-protection5.svg",
          "tooltip_text_description": null,
          "product_benefit_group": {
            "tooltip_text": "Kecelakaan adalah suatu peristiwa atau kejadian mendadak dan tak terduga yang terjadi selama masa berlakunya asuransi yang menyebabkan cedera. Kecelakaan yang dimaksud dalam Super Care yaitu akibat terorisme, pembajakan, pembunuhan, penyerangan, bencana alam, menghirup asap, asap beracun, gas, tenggelam secara tidak sengaja,keracunan makanan, partisipasi dalam kegiatan rekreasi dan/atau olahraga apapun. Baca info selengkapnya pada Ringkasan Informasi Produk.",
            "id": "6af87dc3-a48c-46ed-b2e3-def3232c5667",
            "order": 2,
            "name": "Perlindungan untuk Kecelakaan"
          }
        },
        {
          "id": "447b0914-7e08-472e-a723-38f7887b99ee",
          "name": "Biaya Fisioterapi/ Pengobatan Tradisional Tiongkok ",
          "product_benefit_group_id": "6af87dc3-a48c-46ed-b2e3-def3232c5667",
          "icon_etc": "https://staging.superyou.co.id/products/benefits/super-care-protection6.png",
          "tooltip_text": "Pengobatan Tradisional Tiongkok yang mencakup akupuntur, pengobatan herbal, bekam, dan/atau pijat tuina yang dilakukan secara Rawat Jalan oleh Ahli praktisi pengobatan tradisional tiongkok di Rumah Sakit atau Klinik yang mempunyai fasilitas lengkap dan kualifikasi sah untuk pengobatan tradisional tiongkok",
          "order": 6,
          "product_id": "9b6cd5a9-2666-4303-98df-eae25ae8c2d5",
          "benefit": "<div>Penggantian biaya Fisioterapi dan/atau Pengobatan Tradisional Tiongkok yang diperlukan secara medis hingga <b>Rp5 Juta</b> per Kecelakaan.</div>",
          "icon_svg": "https://staging.superyou.co.id/products/benefits/super-care-protection6.svg",
          "tooltip_text_description": null,
          "product_benefit_group": {
            "tooltip_text": "Kecelakaan adalah suatu peristiwa atau kejadian mendadak dan tak terduga yang terjadi selama masa berlakunya asuransi yang menyebabkan cedera. Kecelakaan yang dimaksud dalam Super Care yaitu akibat terorisme, pembajakan, pembunuhan, penyerangan, bencana alam, menghirup asap, asap beracun, gas, tenggelam secara tidak sengaja,keracunan makanan, partisipasi dalam kegiatan rekreasi dan/atau olahraga apapun. Baca info selengkapnya pada Ringkasan Informasi Produk.",
            "id": "6af87dc3-a48c-46ed-b2e3-def3232c5667",
            "order": 2,
            "name": "Perlindungan untuk Kecelakaan"
          }
        },
        {
          "id": "b9e2353f-b39c-4c07-85cf-1296cd602664",
          "name": "Biaya Alat Bantu Mobilitas/Prostesis",
          "product_benefit_group_id": "6af87dc3-a48c-46ed-b2e3-def3232c5667",
          "icon_etc": "https://staging.superyou.co.id/products/benefits/super-care-protection7.png",
          "tooltip_text": "",
          "order": 7,
          "product_id": "9b6cd5a9-2666-4303-98df-eae25ae8c2d5",
          "benefit": "<div>Penggantian biaya alat bantu seperti kursi roda, lengan atau kaki palsu, dan kruk hingga <b>Rp5 Juta</b> per Tahun Polis bila mengalami kecelakaan.</div>",
          "icon_svg": "https://staging.superyou.co.id/products/benefits/super-care-protection7.svg",
          "tooltip_text_description": null,
          "product_benefit_group": {
            "tooltip_text": "Kecelakaan adalah suatu peristiwa atau kejadian mendadak dan tak terduga yang terjadi selama masa berlakunya asuransi yang menyebabkan cedera. Kecelakaan yang dimaksud dalam Super Care yaitu akibat terorisme, pembajakan, pembunuhan, penyerangan, bencana alam, menghirup asap, asap beracun, gas, tenggelam secara tidak sengaja,keracunan makanan, partisipasi dalam kegiatan rekreasi dan/atau olahraga apapun. Baca info selengkapnya pada Ringkasan Informasi Produk.",
            "id": "6af87dc3-a48c-46ed-b2e3-def3232c5667",
            "order": 2,
            "name": "Perlindungan untuk Kecelakaan"
          }
        },
        {
          "id": "1fdfb069-62d2-41bf-a950-f08f026654f6",
          "name": "Manfaat Modifikasi Tempat Tinggal",
          "product_benefit_group_id": "6af87dc3-a48c-46ed-b2e3-def3232c5667",
          "icon_etc": "https://staging.superyou.co.id/products/benefits/super-care-protection8.png",
          "tooltip_text": "",
          "order": 8,
          "product_id": "9b6cd5a9-2666-4303-98df-eae25ae8c2d5",
          "benefit": "<div>Mendapat biaya modifikasi rumah hingga <b>Rp15 Juta</b> untuk 1x per Jiwa, jika menderita cacat permanen karena kecelakaan.</div>",
          "icon_svg": "https://staging.superyou.co.id/products/benefits/super-care-protection8.svg",
          "tooltip_text_description": null,
          "product_benefit_group": {
            "tooltip_text": "Kecelakaan adalah suatu peristiwa atau kejadian mendadak dan tak terduga yang terjadi selama masa berlakunya asuransi yang menyebabkan cedera. Kecelakaan yang dimaksud dalam Super Care yaitu akibat terorisme, pembajakan, pembunuhan, penyerangan, bencana alam, menghirup asap, asap beracun, gas, tenggelam secara tidak sengaja,keracunan makanan, partisipasi dalam kegiatan rekreasi dan/atau olahraga apapun. Baca info selengkapnya pada Ringkasan Informasi Produk.",
            "id": "6af87dc3-a48c-46ed-b2e3-def3232c5667",
            "order": 2,
            "name": "Perlindungan untuk Kecelakaan"
          }
        }
      ]
    }
  ],
  "tnc": [
    {
      "description": "Metode klaim <b><i>Cashless</b></i> maupun <b><i>Reimbursement</b></i>. Tersedia 4000+ rumah sakit rekanan seluruh indonesia.",
      "icon_svg": "https://staging.superyou.co.id/products/provisions/super-care-protection4.svg",
      "icon_etc": "https://staging.superyou.co.id/products/provisions/super-care-protection4.png",
      "order": 4,
      "tooltip_text": "Terdapat 2 cara klaim produk Super Care, yaitu: <br/>1. <i>Cashless</i>: Proses pengajuan klaim dengan hanya menunjukkan kartu keanggotaan asuransi kesehatan saat masa perawatan atau pengobatan di rumah sakit. <br/>2. <i>Reimbursement</i>: Pemegang Polis menanggung biaya medis yang dikeluarkan dari uang pribadi terlebih dahulu selama masa perawatan lalu proses pengajuan klaim dilakukan setelah masa perawatan selesai dengan melengkapi dan menyerahkan  dokumen-dokumen yang dibutuhkan kepada pihak perusahaan asuransi.",
      "product_id": "9b6cd5a9-2666-4303-98df-eae25ae8c2d5",
      "id": "65055b5b-6889-47df-a42f-f9b64075561b"
    },
    {
      "description": "Terdapat pertanyaan riwayat kesehatan.",
      "icon_svg": "https://staging.superyou.co.id/products/provisions/super-care-protection3.svg",
      "icon_etc": "https://staging.superyou.co.id/products/provisions/super-care-protection3.png",
      "order": 3,
      "tooltip_text": "",
      "product_id": "9b6cd5a9-2666-4303-98df-eae25ae8c2d5",
      "id": "813e8958-4c00-46a2-82e0-3c2027a3b715"
    },
    {
      "description": "Ada Masa Tunggu untuk Penyakit Menular yaitu <b>30 hari</b> kalender sejak tanggal mulai kontrak asuransi/tanggal Perubahan Polis/Pemulihan Polis. Khusus untuk Tuberkulosis (TBC) Masa Tunggu yang berlaku adalah <b>12 bulan</b>.",
      "icon_svg": "https://staging.superyou.co.id/products/provisions/super-care-protection6.svg",
      "icon_etc": "https://staging.superyou.co.id/products/provisions/super-care-protection6.png",
      "order": 6,
      "tooltip_text": "Masa Tunggu adalah jangka waktu tertentu yang harus dilalui terlebih dahulu sebelum manfaat perlindungan asuransi dapat digunakan atau pembayaran klaim dapat dilakukan.<br/> <br/> <br/>Masa Tunggu: <br/>- Tuberkulosis (TBC) adalah 12 bulan. <br/>- Keracunan makanan adalah 90 hari kalender sejak Tanggal Mulai Kontrak Asuransi atau tanggal Perubahan Polis atau tanggal Pemulihan Polis.",
      "product_id": "9b6cd5a9-2666-4303-98df-eae25ae8c2d5",
      "id": "89a4ca12-a6c7-46db-9a50-02abeead8c5f"
    },
    {
      "description": "Cakupan wilayah pertanggungan manfaat asuransi di seluruh dunia.",
      "icon_svg": "https://staging.superyou.co.id/products/provisions/super-care-protection7.svg",
      "icon_etc": "https://staging.superyou.co.id/products/provisions/super-care-protection7.png",
      "order": 7,
      "tooltip_text": "",
      "product_id": "9b6cd5a9-2666-4303-98df-eae25ae8c2d5",
      "id": "95f735e4-8bfa-4358-84b9-73c424eff3ad"
    },
    {
      "description": "Usia masuk adalah <b>30 hari - 70 tahun</b> dan perlindungan dapat diperpanjang hingga usia <b>75 tahun</b>.",
      "icon_svg": "https://staging.superyou.co.id/products/provisions/super-care-protection1.svg",
      "icon_etc": "https://staging.superyou.co.id/products/provisions/super-care-protection1.png",
      "order": 1,
      "tooltip_text": "Usia masuk adalah usia Tertanggung ketika memulai asuransi.",
      "product_id": "9b6cd5a9-2666-4303-98df-eae25ae8c2d5",
      "id": "b4405335-a60d-4d2a-9eb1-f41cdcb4bd04"
    },
    {
      "description": "Maksimum pembelian yaitu 1 Polis untuk Tertanggung yang sama",
      "icon_svg": "https://staging.superyou.co.id/products/provisions/super-care-protection8.svg",
      "icon_etc": "https://staging.superyou.co.id/products/provisions/super-care-protection8.png",
      "order": 8,
      "tooltip_text": "",
      "product_id": "9b6cd5a9-2666-4303-98df-eae25ae8c2d5",
      "id": "cd5df7b4-30f5-47f7-806a-ea6884d323a5"
    },
    {
      "description": "Usia, pekerjaan, & metode klaim berpengaruh terhadap besarnya biaya premi.  ",
      "icon_svg": "https://staging.superyou.co.id/products/provisions/super-care-protection5.svg",
      "icon_etc": "https://staging.superyou.co.id/products/provisions/super-care-protection5.png",
      "order": 5,
      "tooltip_text": "Premi adalah sejumlah uang yang harus dibayarkan setiap bulannya sebagai kewajiban dari tertanggung atas keikutsertaannya di asuransi.",
      "product_id": "9b6cd5a9-2666-4303-98df-eae25ae8c2d5",
      "id": "e6351eeb-3046-4b07-96db-7b3f7a889928"
    },
    {
      "description": "Pembayaran premi dilakukan bulanan atau tahunan, dan asuransi otomatis diperpanjang setiap tahun.",
      "icon_svg": "https://staging.superyou.co.id/products/provisions/super-care-protection2.svg",
      "icon_etc": "https://staging.superyou.co.id/products/provisions/super-care-protection2.png",
      "order": 2,
      "tooltip_text": "",
      "product_id": "9b6cd5a9-2666-4303-98df-eae25ae8c2d5",
      "id": "fd8dcdac-b13a-4bcf-99ad-96d194c6929a"
    }
  ],
  "faq": [
    {
      "title": "1. Apa manfaat Super Care?",
      "body": "Perawatan penyakit infeksi dan kecelakaan termasuk rawat inap, biaya fisioterapi/ penggantian pengobatan tradisional Tiongkok, pembedahan gigi & bedah rekonstruktif, biaya alat bantu mobilitas, modifikasi tempat tinggal dan juga tambahan manfaat untuk perlindungan dan santunan tunai harian akibat COVID-19. Sebagai asuransi kesehatan online, Super Care juga mempunyai manfaat biaya pertanggungan atas risiko tutup usia karena penyakit infeksi.",
      "tooltip_text": "",
      "product_id": "9b6cd5a9-2666-4303-98df-eae25ae8c2d5",
      "id": "9edd79bc-4b9a-44e2-b19e-baa282409c3e"
    },
    {
      "title": "2. Bagaimana cara klaim Super Care?",
      "body": "<p>Siapkan beberapa dokumen untuk pengajuan proses klaim reimbursement, seperti Surat Keterangan Dokter dan Fotokopi KTP Tertanggung. Dokumen pendukung lainnya juga diperlukan sesuai klaim yang diajukan:</p><span class='inline-block mb-1'><b>Klaim Meninggal Dunia:</b></span><br>Form Klaim Meninggal, Form Isian Ahli Waris. Foto KTP Ahli Waris, Akta kematian, Fotokopi Kartu Keluarga/Akte Lahir/dokumen lain yang membuktikan hubungan Tertanggung dengan Ahli Waris.<br/><br/><span class='inline-block mb-1'><b>Klaim Manfaat Rawat Inap:</b></span><br>Form Pengajuan Klaim, Fotokopi KTP pihak yang mengajukan klaim dan Tertanggung, Kwitansi & Rincian tagihan Rumah Sakit asli, Form surat keterangan dokter/Rumah Sakit yang merawat Tertanggung lengkap dengan resume medis dan hasil pemeriksaan/tes selama dirawat, Laporan/berita Kepolisian (jika disebabkan Kecelakaan), Surat pembayaran dari asuransi lain jika ada.<br/><br/><span class='inline-block mb-1'><b>Klaim Biaya Alat Bantu Mobilitas/Prostesis:</b></span><br>Form Pengajuan Klaim, Kwitansi asli, Fotokopi resep atau rekomendasi dari Dokter yang merawat.<br/><br/><span class='inline-block mb-1'><b>Klaim Modifikasi Tempat Tinggal:</b></span><br>Form Pengajuan klaim, Kwitansi asli, Fotokopi resep atau rekomendasi dari Dokter yang merawat, Lampiran foto bagian dari rumah yang akan dimodifikasi termasuk sebelum dan sesudah modifikasi.<br/><br/>Kamu bisa mengunduh formulir yang kamu butuhkan di <a class='text-teal' href='/dashboard/klaim/download'><b>dashboard</b></a> akun kamu. Pengajuan klaim untuk pembayaran Manfaat Asuransi harus dibuat secara resmi tertulis dan dikirimkan ke Kantor Pusat PT. Asuransi Jiwa Sequis Life dalam waktu 30 (tiga puluh) hari kalender setelah Tertanggung keluar dari Rumah Sakit, namun apabila kamu telah memilih opsi klaim cashless, maka kamu cukup membawa kartu identitas serta kartu peserta asuransi ketika akan membayar biaya perawatan rumah sakit. Jika memerlukan informasi atau bantuan lebih lanjut, mohon hubungi Customer Service kami di <b>(021) 2994 2929</b>.",
      "tooltip_text": "",
      "product_id": "9b6cd5a9-2666-4303-98df-eae25ae8c2d5",
      "id": "aa9917f4-13b7-4a58-ad4f-0f6db090222a"
    },
    {
      "title": "3. Apa saja pengecualian Super Care?",
      "body": "<p>Berikut adalah beberapa contoh dari risiko meninggal dunia/biaya cakupan rumah sakit yang tidak dicover oleh Super Care, antara lain disebabkan oleh:</p><ul style='list-style: disc; padding-left: 20px;'><li>Bunuh diri atau sengaja melukai diri</li><li>Pengaruh alkohol atau obat-obatan lainnya</li><li>Masalah jiwa, mental, atau ketidakwarasan</li><li>Kondisi yang sudah ada sebelumnya (pre-existing condition)</li><li>Infeksi menular secara seksual, seperti HIV/AIDS</li><li>Pembedahan kosmetik/plastik</li><li>Partisipasi dalam penerbangan kecuali penerbangan komersial</li><li>Partisipasi dalam olahraga profesional dan berbahaya</li><li>Kecelakaan saat mengemudi trek balap motor</li><li>Perang, revolusi, atau peristiwa semacamnya</li><li>Radioaktivitas atau kerusakan bahan bakar nuklir</li></ul>",
      "tooltip_text": "",
      "product_id": "9b6cd5a9-2666-4303-98df-eae25ae8c2d5",
      "id": "4e8fb830-e9c5-4fd1-8cbc-eeb91e9977e6"
    }
  ],
  "not_coverage": [
    {
      "description": "Santunan rawat inap selain untuk penyakit menular dan kecelakaan",
      "icon_svg": "products/not_coverages/super-care-protection2.svg",
      "icon_etc": "products/not_coverages/super-care-protection2.png",
      "order": null,
      "tooltip_text": "",
      "product_id": "9b6cd5a9-2666-4303-98df-eae25ae8c2d5",
      "id": "9bfb1f9c-f3ee-498d-b300-09c740b9328c"
    },
    {
      "description": "Santunan kematian selain karena penyakit menular, serta santunan cacat total & tetap",
      "icon_svg": "products/not_coverages/super-care-protection1.svg",
      "icon_etc": "products/not_coverages/super-care-protection1.png",
      "order": null,
      "tooltip_text": "",
      "product_id": "9b6cd5a9-2666-4303-98df-eae25ae8c2d5",
      "id": "b2646940-6393-4149-95de-a205ee8a38e0"
    },
    {
      "description": "Perlindungan terhadap penyakit kritis",
      "icon_svg": "products/not_coverages/super-care-protection3.svg",
      "icon_etc": "products/not_coverages/super-care-protection3.png",
      "order": null,
      "tooltip_text": "",
      "product_id": "9b6cd5a9-2666-4303-98df-eae25ae8c2d5",
      "id": "bd8b339f-2d13-4c8d-a380-612e37d98608"
    }
  ],
  "plans": []
}
```
```json title="failed - product not found"
{
  "detail": "Product Not Found"
}
```