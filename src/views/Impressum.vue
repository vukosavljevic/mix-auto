<template>
  <LegalPage title="Impressum" subtitle="Podaci o trgovcu">
    <dl>
      <template v-for="row in rows" :key="row.label">
        <dt>{{ row.label }}</dt>
        <dd>
          <a v-if="row.href" :href="row.href">{{ row.value }}</a>
          <template v-else>{{ row.value }}</template>
        </dd>
      </template>
    </dl>

    <h2>Prodajno mjesto</h2>
    <p>Auto salon, {{ COMPANY.address }}</p>

    <h2>Prigovori potrošača</h2>
    <p>
      Prigovor možete podnijeti pisanim putem na adresu sjedišta ili e-poštom na
      <a :href="`mailto:${COMPANY.email}`">{{ COMPANY.email }}</a>. Na prigovor odgovaramo pisanim putem
      najkasnije u roku od 15 dana od dana primitka, sukladno Zakonu o zaštiti potrošača.
    </p>
    <p>
      Za izvansudsko rješavanje potrošačkih sporova možete se obratiti nadležnom tijelu za alternativno
      rješavanje sporova, npr. Centru za mirenje pri Hrvatskoj gospodarskoj komori.
    </p>
  </LegalPage>
</template>

<script setup>
import LegalPage from '../components/LegalPage.vue'
import { COMPANY } from '../lib/company'

const rows = [
  { label: 'Naziv', value: COMPANY.name },
  { label: 'Pravni oblik', value: COMPANY.form },
  { label: 'Sjedište', value: COMPANY.address },
  { label: 'OIB', value: COMPANY.oib },
  { label: 'MBS', value: COMPANY.mbs },
  { label: 'Registarski sud', value: COMPANY.court },
  { label: 'Temeljni kapital', value: COMPANY.shareCapital },
  { label: 'Osoba ovlaštena za zastupanje', value: COMPANY.director },
  { label: 'Banka', value: COMPANY.bank },
  { label: 'IBAN', value: COMPANY.iban },
  { label: 'E-pošta', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { label: 'Telefon', value: COMPANY.phone, href: `tel:${COMPANY.phone.replace(/\s/g, '')}` },
].filter((r) => r.value)
</script>
