import {
  generateEstonianCode,
  generateLatvianCode,
  generateLithuanianCode,
} from '../src/codeGenerator'

describe('Estonian personal code check', () => {
  test('should start with "EST-"', () => {
    const code = generateEstonianCode()
    expect(code.startsWith('EST-')).toBe(true)
  })

  test('should be 8 characters long', () => {
    const code = generateEstonianCode()
    expect(code.length).toBe(8)
  })

  test('should match the pattern EST-XXXX where XXXX is a four-digit number', () => {
    const code = generateEstonianCode()
    expect(/EST-\d{4}/.test(code)).toBe(true)
  })
})

describe('Latvian personal code check', () => {
  test('should start with "LVA-"', () => {
    const code = generateLatvianCode()
    expect(code.startsWith('LVA-')).toBe(true)
  })

  test('should be 8 characters long', () => {
    const code = generateLatvianCode()
    expect(code.length).toBe(8)
  })

  test('should match the pattern LVA-XXXX where XXXX is a four-digit number', () => {
    expect(/LVA-\d{4}/.test(generateLatvianCode())).toBe(true)
  })
})

describe('Lithuanian personal code check', () => {
  test('should start with "LTU-"', () => {
    expect(generateLithuanianCode().startsWith('LTU-')).toBe(true)
  })

  test('should be 8 characters long', () => {
    expect(generateLithuanianCode().length).toBe(8)
  })

  test('should match the pattern LTU-XXXX where XXXX is a four-digit number', () => {
    expect(/LTU-\d{4}/.test(generateLithuanianCode())).toBe(true)
  })
})
