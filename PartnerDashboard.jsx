import React, { useState } from 'react'
import { Briefcase, Search } from 'lucide-react'
import DashboardShell from './DashboardShell.jsx'
import WorkspaceHeader from './WorkspaceHeader.jsx'
import { useAuth } from './AuthContext.jsx'
import JobsTab from './JobsTab.jsx'
import TalentSearchTab from './TalentSearchTab.jsx'

const TABS = [
  { key: 'jobs', label: 'Placement Ads', icon: Briefcase },
  { key: 'talent', label: 'Talent Filter', icon: Search },
]

export default function PartnerDashboard() {
  const { currentUser } = useAuth()
  const [active, setActive] = useState('jobs')
  return (
    <DashboardShell tabs={TABS} active={active} onChange={setActive} roleLabel="Industry Partner">
      <WorkspaceHeader eyebrow="Industry Partners Dashboard" name={currentUser.name} subtitle={`Reg No. ${currentUser.regNum} • Verified Partner`} idLabel={`ID: ${currentUser.partnerId}`} />
      {active === 'jobs' && <JobsTab />}
      {active === 'talent' && <TalentSearchTab />}
    </DashboardShell>
  )
}
