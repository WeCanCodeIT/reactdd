import React from 'react'

const UserCard = ({ user }) => (
  <article className="UserCard">
    <img className="UserCard__avatar" src={user.avatar.src} alt={user.avatar.alt} />
    <h3 className="UserCard__name">{`${user.firstName} ${user.lastName}`}</h3>
  </article>
)

export default UserCard
