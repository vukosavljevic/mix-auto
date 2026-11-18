<template>
  <LegalPage title="Kolačići" subtitle="Koristimo li kolačiće i zašto">
    <h2>Što su kolačići</h2>
    <p>
      Kolačići (engl. cookies) su male tekstualne datoteke koje web stranica sprema u vaš preglednik, npr. da bi
      zapamtila postavke ili pratila posjete.
    </p>

    <h2>Kolačići na mix-auto.hr</h2>
    <p>
      <strong>Ova stranica ne koristi kolačiće za praćenje, oglašavanje ni analitiku</strong>, pa za njezino
      korištenje ne tražimo vaš pristanak.
    </p>
    <ul>
      <li>
        <strong>Statistika posjeta</strong> – koristimo Vercel Web Analytics, koji radi bez kolačića i ne
        identificira pojedinog posjetitelja.
      </li>
      <li>
        <strong>Fontovi</strong> – učitavaju se s Google Fonts. Google pritom ne sprema kolačiće, ali vidi vašu IP
        adresu (više u <router-link to="/politika-privatnosti">Politici privatnosti</router-link>).
      </li>
      <li>
        <strong>Nužna lokalna pohrana</strong> – samo za prijavu djelatnika u administraciju stranice; posjetitelja se
        ne tiče.
      </li>
    </ul>
    <p>Ako ubuduće uvedemo kolačiće koji nisu nužni, prije toga ćemo tražiti vaš pristanak i ažurirati ovu stranicu.</p>

    <h2>Upravljanje kolačićima u pregledniku</h2>
    <p>
      Kolačiće možete u svakom trenutku pregledati i obrisati u postavkama svog preglednika (Chrome, Safari, Firefox,
      Edge – izbornik „Privatnost” ili „Kolačići i podaci web-lokacija”).
    </p>

    <h2>Kontakt</h2>
    <p>
      Pitanja o kolačićima i privatnosti pošaljite na <a :href="`mailto:${COMPANY.email}`">{{ COMPANY.email }}</a>.
    </p>
  </LegalPage>
</template>

<script setup>
import LegalPage from '../components/LegalPage.vue'
import { COMPANY } from '../lib/company'
</script>
