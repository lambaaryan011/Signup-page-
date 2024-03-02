import './magic.css';
import React from 'react'

export default function Event() {
  return (
    <>
    {/* In this case, the outer pair of curly braces indicates that a JavaScript expression is being used, and the inner pair is an object literal with a width property.
 */}
      <div class="card container intro" style={{width: "35rem"}}>
  <div class="card-body">
    <h5 class="card-title">Signup Form</h5>

    <label for="username">Username:</label>
<input type="text" id="username" name="username"/>
<br />

<label for="PASS">Password:</label>
<input type="text" id="Pass" name="username"/>
<br />

<label for="mobile">Phone No.:</label>
<input type="text" id="mobile" name="username"/>
<br />
<label for="mail">Email ID:</label>
<input type="text" id="mail" name="username"/>
<br />

{/* The href attribute is set to "#" (a placeholder) since it seems to be a placeholder for a login action. */}
    <a href="#" class=" btn-primary">login</a>
  </div>
</div>
    </>
  )
}
