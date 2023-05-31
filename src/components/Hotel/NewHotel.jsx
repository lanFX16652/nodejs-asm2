import classes from "./NewHotel.module.css"

const NewHotel = () => {
    return (
        <div>
            <div className={classes['input-wrapper']}>
                <form>
                    <input className={classes['newproduct-input']} type="text" placeholder="Add New Product"></input>

                    <div className={classes['input-container']}>
                        <div className={classes['row']}>
                        <div className={classes['col-md-5']}>
                                <label>Name</label>
                                <input placeholder="My Hotel"></input>
                            </div> 
                            <div className={classes['col-md-5']}>
                                <label>Type</label>
                                <input placeholder="hotel"></input>
                            </div> 
                        </div>

                        <div className={classes['row']}>
                        <div className={classes['col-md-5']}>
                                <label>City</label>
                                <input placeholder="New York"></input>
                            </div> 
                            <div className={classes['col-md-5']}>
                                <label>Address</label>
                                <input placeholder="elton st, 216"></input>
                            </div> 
                        </div>

                        <div className={classes['row']}>
                        <div className={classes['col-md-5']}>
                                <label>Distance from City Center</label>
                                <input placeholder="500"></input>
                            </div> 
                            <div className={classes['col-md-5']}>
                                <label>Title</label>
                                <input placeholder="The Best Hotel"></input>
                            </div> 
                        </div>

                        <div className={classes['row']}>
                        <div className={classes['col-md-5']}>
                                <label>Description</label>
                                <input placeholder="description"></input>
                            </div> 
                            <div className={classes['col-md-5']}>
                                <label>Price</label>
                                <input placeholder="100"></input>
                            </div> 
                        </div>

                        <div className={classes['row']}>
                        <div className={classes['col-md-5']}>
                                <label>Images</label>
                                <input placeholder="New York"></input>
                            </div> 
                            <div className={classes['col-md-5']}>
                                <label>Featured</label>
                                <br></br>
                                <select>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div> 
                        </div>

                        <div className={classes['row']}>
                        <div className={classes['col-md-5']}>
                                <label>Rooms</label>
                                <br></br>
                            <select>
                                    <option>2 Bed Room</option>
                                    <option>1 Bed Room</option>
                            </select>
                            </div> 
                        </div>

                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
          
        </div>
    )
}

export default NewHotel;