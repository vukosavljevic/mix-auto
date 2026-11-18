<template>
  <LegalPage title="Politika privatnosti" subtitle="Kako postupamo s vašim osobnim podacima">
    <h2>1. Voditelj obrade</h2>
    <p>
      Voditelj obrade osobnih podataka je {{ COMPANY.name }}, {{ COMPANY.address }}, OIB {{ COMPANY.oib }}
      (u daljnjem tekstu: „MIX AUTO”, „mi”). Za sva pitanja o zaštiti osobnih podataka obratite nam se na
      <a :href="`mailto:${COMPANY.email}`">{{ COMPANY.email }}</a> ili na telefon {{ COMPANY.phone }}.
    </p>

    <h2>2. Koje podatke prikupljamo</h2>
    <ul>
      <li>
        <strong>Podaci koje nam sami pošaljete</strong> – kad nas kontaktirate e-poštom, telefonom ili porukom
        (ime i prezime, kontakt, sadržaj upita, npr. vozilo za koje se zanimate).
      </li>
      <li>
        <strong>Podaci potrebni za kupoprodaju vozila</strong> – ako kupite vozilo ili nam ga prodate (ime i prezime,
        adresa, OIB, podaci iz osobne iskaznice, podaci o plaćanju), u mjeri u kojoj ih traže propisi.
      </li>
      <li>
        <strong>Tehnički podaci o posjetu</strong> – anonimizirana statistika posjeta (Vercel Web Analytics), bez
        kolačića i bez identifikacije pojedinog posjetitelja. Poslužitelji mogu privremeno bilježiti IP adresu
        radi sigurnosti i ispravnog rada stranice.
      </li>
    </ul>
    <p>Na ovoj web stranici nema obrazaca ni korisničkih računa za posjetitelje.</p>

    <h2>3. Svrha i pravna osnova obrade</h2>
    <ul>
      <li>Odgovor na vaš upit i dogovor o pregledu ili kupnji vozila – poduzimanje radnji na vaš zahtjev prije sklapanja ugovora (čl. 6. st. 1. t. b) GDPR-a).</li>
      <li>Sklapanje i izvršenje kupoprodajnog ugovora – izvršenje ugovora (čl. 6. st. 1. t. b) GDPR-a).</li>
      <li>Ispunjavanje zakonskih obveza (računovodstvo, porezi, sprječavanje pranja novca) – pravna obveza (čl. 6. st. 1. t. c) GDPR-a).</li>
      <li>Sigurnost i statistika rada stranice – legitimni interes (čl. 6. st. 1. t. f) GDPR-a).</li>
    </ul>

    <h2>4. Koliko dugo čuvamo podatke</h2>
    <p>
      Upite čuvamo dok je to potrebno za odgovor i eventualni nastavak komunikacije, a najdulje 12 mjeseci od
      zadnjeg kontakta. Podatke iz kupoprodaje čuvamo onoliko koliko propisuju računovodstveni i porezni propisi
      (u pravilu 11 godina). Nakon toga podatke brišemo.
    </p>

    <h2>5. Kome podatke otkrivamo</h2>
    <p>Vaše podatke ne prodajemo. Mogu ih obrađivati samo:</p>
    <ul>
      <li>pružatelji usluga koji nam pomažu u radu (hosting web stranice – Vercel; baza podataka i pohrana – Supabase; e-pošta), kao izvršitelji obrade po našim uputama;</li>
      <li>knjigovodstveni servis, banke, leasing kuće i osiguravatelji – ako je to potrebno za kupoprodaju;</li>
      <li>nadležna tijela (npr. Porezna uprava, MUP) – kad to propis zahtijeva.</li>
    </ul>
    <p>
      Neki od pružatelja usluga mogu podatke obrađivati izvan Europskog gospodarskog prostora. U tom slučaju
      prijenos se temelji na odluci Europske komisije o primjerenosti ili na standardnim ugovornim klauzulama.
    </p>

    <h2>6. Vanjske usluge na stranici</h2>
    <ul>
      <li><strong>Google Fonts</strong> – fontovi se učitavaju s Googleovih poslužitelja, pri čemu Google vidi vašu IP adresu.</li>
      <li><strong>Njuškalo i Facebook</strong> – poveznice na naše oglase i stranicu. Kad ih otvorite, vrijede pravila privatnosti tih servisa.</li>
    </ul>

    <h2>7. Vaša prava</h2>
    <p>Imate pravo zatražiti:</p>
    <ul>
      <li>pristup svojim podacima i kopiju podataka,</li>
      <li>ispravak netočnih podataka,</li>
      <li>brisanje podataka („pravo na zaborav”), kad za obradu više nema osnove,</li>
      <li>ograničenje obrade i prigovor na obradu temeljenu na legitimnom interesu,</li>
      <li>prenosivost podataka.</li>
    </ul>
    <p>
      Zahtjev pošaljite na <a :href="`mailto:${COMPANY.email}`">{{ COMPANY.email }}</a>; odgovorit ćemo najkasnije
      u roku od 30 dana. Ako smatrate da obrađujemo vaše podatke protivno propisima, možete podnijeti pritužbu
      Agenciji za zaštitu osobnih podataka (AZOP), Selska cesta 136, 10000 Zagreb,
      <a href="https://azop.hr" target="_blank" rel="noopener">azop.hr</a>.
    </p>

    <h2>8. Kolačići</h2>
    <p>
      O kolačićima pročitajte na stranici <router-link to="/kolacici">Kolačići</router-link>.
    </p>

    <h2>9. Izmjene</h2>
    <p>Ovu politiku možemo povremeno izmijeniti. Važeća verzija uvijek je objavljena na ovoj stranici.</p>
  </LegalPage>
</template>

<script setup>
import LegalPage from '../components/LegalPage.vue'
import { COMPANY } from '../lib/company'
</script>
