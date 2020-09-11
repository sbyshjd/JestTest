import { service1, service2 } from './app'
// const { service1, service2 } = require('./app')

test('test-basic', () => {
    expect(true).toBeTruthy()
})

test('test-service1',() => {
    expect(service1(300)).toBe('premium service')
})

test('test-service2',()=> {
    expect(service2(2000)).toBe('gold')
})
