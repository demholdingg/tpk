// ── Service ──────────────────────────────────────────────────────────────────
export interface Service {
  id:          string
  tag:         string
  name:        string
  description: string
  image:       string
  href:        string
}

// ── Project ───────────────────────────────────────────────────────────────────
export interface Project {
  id:       string
  category: string
  name:     string
  image:    string
  href:     string
}

// ── Stat ──────────────────────────────────────────────────────────────────────
export interface Stat {
  value: string
  label: string
}

// ── NavLink ───────────────────────────────────────────────────────────────────
export interface NavLink {
  label: string
  href:  string
}
