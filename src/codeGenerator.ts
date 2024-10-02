export function generateEstonianCode(): string {
  const digits = Math.floor(1000 + Math.random() * 9000)
  return `EST-${digits}`
}

export function generateLatvianCode(): string {
  const digits = Math.floor(1000 + Math.random() * 9000)
  return `LVA-${digits}`
}

export function generateLithuanianCode(): string {
  const digits = Math.floor(1000 + Math.random() * 9000)
  return `LTU-${digits}`
}
