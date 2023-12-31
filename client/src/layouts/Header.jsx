// import React from 'react';
// import {Link}  from 'react-router-dom';

// const Header = () => {
//   return (
//     <div>
//         <nav>
//         <Link to='/'>Home</Link> &nbsp;
//         <Link to='/register'>Register</Link>&nbsp;
//         <Link to='/login'>Login</Link>&nbsp;
//         <Link to='/profile'>Profile</Link>
//         </nav>
//     </div>
//   )
// }

// export default Header


// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//         <Link className="navbar-brand" to="/">Home</Link>
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to="/register">Register</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/login">Login</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/profile">Profile</Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Header;


import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <NavLink className="navbar-brand" to="/">Home</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/register" >Register</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile">Profile</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
