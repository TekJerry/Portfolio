import React from 'react';

export default function Contact() {
  return (
    <div>
      <form>
        <input type="text" name="sender"/>
        <input type="text" name="email"/>
        <input type="text" name="subject"/>
        <input type="text" name="body" />
        <input type="submit" />
      </form>
    </div>
  )
}
