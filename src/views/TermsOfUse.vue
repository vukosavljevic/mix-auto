<template>
  <LegalPage title="Uvjeti korištenja" subtitle="Pravila korištenja web stranice mix-auto.hr">
    <h2>1. Opće odredbe</h2>
    <p>
      Web stranicu <a :href="COMPANY.website">mix-auto.hr</a> vodi {{ COMPANY.name }}, {{ COMPANY.address }},
      OIB {{ COMPANY.oib }}. Korištenjem stranice prihvaćate ove uvjete. Ako se s njima ne slažete, molimo da
      stranicu ne koristite.
    </p>

    <h2>2. Podaci o vozilima i cijene</h2>
    <ul>
      <li>
        Podaci o vozilima (oprema, kilometraža, godište, slike i opis) informativnog su karaktera. Trudimo se da budu
        točni, ali su moguće nenamjerne pogreške. Mjerodavno je stanje vozila utvrđeno pri pregledu i podaci navedeni
        u kupoprodajnom ugovoru.
      </li>
      <li>
        Objava vozila na stranici nije obvezujuća ponuda. Vozilo je moguće prodano prije nego što je uklonjeno sa
        stranice – dostupnost provjerite telefonom ili e-poštom.
      </li>
      <li>
        Sve cijene iskazane su u eurima. Uz svaku cijenu ističemo i baznu cijenu, a važeći i arhivski cjenici
        objavljeni su na stranici <router-link to="/cjenik">Cjenik</router-link>.
      </li>
      <li>Ugovor o kupoprodaji sklapa se isključivo u pisanom obliku u našem prodajnom salonu.</li>
    </ul>

    <h2>3. Intelektualno vlasništvo</h2>
    <p>
      Sadržaj stranice (tekstovi, fotografije, logotip i dizajn) vlasništvo je {{ COMPANY.name }} ili se koristi uz
      dopuštenje. Nije ga dopušteno kopirati ni koristiti u komercijalne svrhe bez našeg pisanog odobrenja.
      Strojno čitljivi cjenici smiju se slobodno preuzimati i automatski obrađivati.
    </p>

    <h2>4. Poveznice na druge stranice</h2>
    <p>
      Stranica sadrži poveznice na vanjske servise (npr. Njuškalo, Facebook). Ne odgovaramo za sadržaj i pravila
      privatnosti tih stranica.
    </p>

    <h2>5. Ograničenje odgovornosti</h2>
    <p>
      Ne jamčimo neprekidan rad stranice niti da će biti bez pogrešaka. Ne odgovaramo za štetu nastalu korištenjem
      podataka sa stranice, osim ako je prouzročena namjerno ili krajnjom nepažnjom. Ovime se ne ograničavaju prava
      potrošača koja proizlaze iz propisa.
    </p>

    <h2>6. Zaštita osobnih podataka</h2>
    <p>
      Način obrade osobnih podataka opisan je u <router-link to="/politika-privatnosti">Politici privatnosti</router-link>.
    </p>

    <h2>7. Mjerodavno pravo</h2>
    <p>
      Na ove uvjete primjenjuje se pravo Republike Hrvatske. Za sporove je nadležan stvarno nadležni sud u Osijeku,
      osim ako je propisima o zaštiti potrošača određeno drukčije. Podaci za prigovore navedeni su u
      <router-link to="/impressum">Impressumu</router-link>.
    </p>

    <h2>8. Izmjene uvjeta</h2>
    <p>Uvjete možemo izmijeniti u bilo kojem trenutku. Izmjene vrijede od objave na ovoj stranici.</p>
  </LegalPage>
</template>

<script setup>
import LegalPage from '../components/LegalPage.vue'
import { COMPANY } from '../lib/company'
</script>
