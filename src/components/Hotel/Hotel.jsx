import classes from "./Hotel.module.css";

const Hotel = () => {
     return (
      <>
         <div className={classes['content-header']}></div>
         <div>
            <div className={classes['hotellist-navbar-wrapper']}>
               <h2>Hotel List</h2>
               <button>Add New</button>
            </div>

            <table className={classes['table-hotel']}>
               <tr>
                  <th>
                  <i class="bi bi-square"></i>
                     <span> | </span>ID
                  </th>
                  <th><span>| </span>Name</th>
                  <th><span>| </span>Type</th>
                  <th><span>| </span>Title</th>
                  <th><span>| </span>City</th>
                  <th><span>| </span>Action</th>
               </tr>

               <tr>
                  <td className={classes['id-cell']}>
                     <span className={classes['checkbox-container']}>
                        <input type="checkbox"></input>
                        <span class="checkmark"></span>
                     </span>
                     b
                  </td>
                  <td>a</td>
                  <td>a</td>
                  <td>a</td>
                  <td>a</td>
                  <td>
                     <button>Delete</button>
                  </td>                 
               </tr>

               <tr>
                  <td className={classes['id-cell']}>
                     <span className={classes['checkbox-container']}>
                        <input type="checkbox"></input>
                        <span class="checkmark"></span>
                     </span>
                     b
                  </td>
                  <td>a</td>
                  <td>a</td>
                  <td>a</td>
                  <td>a</td>
                  <td>
                     <button>Delete</button>
                  </td>                 
               </tr>
            </table>
         </div>
      </>
        
     )
}

export default Hotel;