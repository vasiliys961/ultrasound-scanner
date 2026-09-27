'use client'

import Link from 'next/link'
import { LanguageSwitch, useLocale } from '@/components/LocaleProvider'
import { moduleCopy } from '@/lib/i18n/copy'
import { listOrganModules } from '@/lib/ultrasound-modules/registry'

export default function HomePage() {
  const { locale, t } = useLocale()
  const modules = listOrganModules()
  return (
    <main className="shell">
      <header className="home-hero">
        <div>
          <p className="brand">DOCTOR OPUS <span>SONO</span></p>
          <h1>{t('homeTitle')}</h1>
          <p className="muted">{t('homeLead')}</p>
        </div>
        <div className="top-tools">
          <LanguageSwitch />
          <p className="disclaimer">{t('homeDisclaimer')}</p>
        </div>
      </header>
      <section className="home-grid">
        <Link className="card" href="/scan?mode=guided">
          <h2>Guided</h2>
          <p>{t('guidedText')}</p>
        </Link>
        <Link className="card" href="/scan?mode=second-opinion">
          <h2>Second opinion</h2>
          <p>{t('secondText')}</p>
        </Link>
      </section>
      <div className="modules">
        {modules.map((module) => (
          <span key={module.id}>{moduleCopy[locale][module.id]?.title ?? module.title}</span>
        ))}
      </div>
    </main>
  )
}