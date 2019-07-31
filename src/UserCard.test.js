import React from 'react'
import ReactDOM from 'react-dom'

import UserCard from './UserCard'

let entry
const user = {
  avatar: {
    alt: 'User Avatar',
    src: 'https://via.placeholder.com/150'
  },
  firstName: 'John',
  lastName: 'Doe'
}

describe('UserCard', () => {

  beforeEach(() => {
    entry = document.createElement('div')
    ReactDOM.render(<UserCard user={user} />, entry)
  })

  test('renders', () => {
    expect(entry.querySelector('.UserCard') instanceof HTMLElement).toBeTruthy()
  })

  test('Displays a users first and last name in an `h3` element', () => {
    expect(entry.querySelector('.UserCard__name').tagName).toMatch('H3')
    expect(entry.querySelector('.UserCard__name').textContent).toMatch('John Doe')
  })

  test('Displays a users avatar image in an `img` tag', () => {
    expect(entry.querySelector('.UserCard__avatar').tagName).toMatch('IMG')
    expect(entry.querySelector('.UserCard__avatar').getAttribute('src')).toMatch(user.avatar.src)
    expect(entry.querySelector('.UserCard__avatar').getAttribute('alt')).toMatch(user.avatar.alt)
  })
})
