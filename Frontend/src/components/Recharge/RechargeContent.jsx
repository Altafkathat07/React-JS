import img from "../../assets/images/wal_img.png"
import pay from "../../assets/images/htmls2.png"
import { useState, useEffect } from "react"
import axios from "axios"
import { showAlert } from "../AlertMassWrapper"

function RechargeContent() {
    const [amount, setAmount] = useState(300)

    const amountHandler = (value) =>{
        setAmount(value);
    }
    const [user, setUser] = useState({});

    useEffect(() => {
        axios.post('/api/webapi/GetUserInfo')
            .then(response => {
                const userInfo = response.data.data;
                console.log("this is res: " + JSON.stringify(userInfo));
                setUser(userInfo);
            })
            .catch(error => console.log(error));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('money', amount);
    
        try {
          const response = await fetch('/api/webapi/recharge', {
            method: 'POST',
            body: formData,
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const data = await response.json();
    
          if (data.status === false) {
            showAlert('Failed to submit form: ' + data.message, 'error', 'Error');
            return;
          }
    
          showAlert('Success :' + data.message);
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
          showAlert('There was a problem with the fetch operation: ' + error.message, 'error', 'Error');
        }
      };
  return (
    <>
      <div data-v-67caa467="" className="selectBox">
                <div data-v-67caa467="" className="colorBox"></div>
                <div data-v-67caa467="" className="txtBox c-row c-row-middle">
                    <div data-v-67caa467="" className="txt p-r-5"> Total Balance: </div>
                    <div data-v-67caa467="" className="c-row c-row-middle">
                        <div data-v-67caa467="" className="money">
                            
                            <div data-v-67caa467="">{user.money_user ?? 0}<span data-v-67caa467="" className="p-l-5"> ₹</span></div>
                        </div>
                        <div data-v-67caa467="" className="van-image m-l-10" style={{width: "20px"}}>
                            <img src={img} className="van-image__img" />
                        </div>
                    </div>
                    <div data-v-67caa467="" className="icon"></div>
                </div>
                <div data-v-67caa467="" className="pay-box pt-2">
                    <div data-v-67caa467="" className="title c-row c-row-middle">
                        <div data-v-67caa467="" className="van-image" style={{width: "20px"}}>
                            <img src={pay} className="van-image__img" />
                        </div>
                        <span data-v-67caa467="" className="m-l-10"> Payment Method </span>
                    </div>
                    <div data-v-67caa467="" className="list c-row c-flex-warp m-t-10">
                        <div data-v-67caa467="" className="item action gpay" type="bank">
                           {/* <!-- <img data-v-67caa467="" width="20px" height="20px" src="/images/phonepe.png"
                                className="img">
                            <div data-v-67caa467="" className="name">Getway 1</div> --> */}
                            <div data-v-67caa467="" className="icon">
                                <i data-v-67caa467="" className="van-icon van-icon-success iconBg"
                                    > </i>
                            </div>
                         
                        </div>
                        <div data-v-67caa467="" className="item phonepe" type="bank">
                         {/* <!--   <img data-v-67caa467="" width="20px" height="20px" src="/images/recharge_TRANSFER_red.webp"
                                className="img">
                            <div data-v-67caa467="" className="name">Getway 2</div> --> */}

                            
                        </div>
                        <div data-v-67caa467="" className="item patymaa" type="bank">
                          {/* <!--  <img data-v-67caa467="" width="20px" height="20px" src="/images/recharge_TRANSFER_red.webp"
                                className="img">
                            <div data-v-67caa467="" className="name">Getway 3</div> --> */}

                           
                        </div>
                    </div> 

                   
                    <div data-v-67caa467="" className="list c-row c-flex-warp m-t-10">
                        <div data-v-67caa467="" className="item upiaa" type="MOMO">
                         {/* <!--   <img data-v-67caa467="" width="20px" height="20px" src="/images/recharge_TRANSFER_red.webp"
                                className="img">
                            <div data-v-67caa467="" className="name">UPI 1</div> --> */}
                            <div data-v-67caa467="" className="icon">
                           {/* <!--  <i data-v-67caa467="" className="van-icon van-icon-success"
                                    style="color: rgb(237 6 6); font-size: 36px;"> </i> --> */}
                            </div>
                            
                        </div>
                        <div data-v-67caa467="" className="item upiaa" type="MOMO">
                        {/* <!--    <img data-v-67caa467="" width="20px" height="20px" src="/images/recharge_TRANSFER_red.webp"
                                className="img">
                            <div data-v-67caa467="" className="name">UPI 2</div> --> */}

                            
                        </div>
                        <div data-v-67caa467="" className="item upiaa" type="MOMO">
                          {/* <!--  <img data-v-67caa467="" width="20px" height="20px" src="/images/recharge_TRANSFER_red.webp"
                                className="img">
                            <div data-v-67caa467="" className="name">upi 3</div> --> */}

                            
                        </div>
                    </div>
                   

                </div>
                
                <div data-v-67caa467="" className="pay-box">
                    <div data-v-67caa467="" className="title c-row c-row-middle c-row-between">
                        <div data-v-67caa467="" className="c-row">
                            <div data-v-67caa467="" className="van-image"  style={{width: "20px"}}>
                                <img src={pay} className="van-image__img" />
                            </div>
                            <span data-v-67caa467="" className="m-l-10"> Print ₹</span>
                        </div>
                        
                    </div>
                    <div data-v-67caa467="">
                        <form onSubmit={handleSubmit}>
                            <div data-v-67caa467="">
                                <div data-v-67caa467="" className="box numberSize c-row c-row-between c-row-middle p-l-10">
                                    <div data-v-67caa467="" className="fuhao"> </div>
                                    <div data-v-67caa467="" className="input van-cell van-field">
                                        <div className="van-cell__value van-cell__value--alone van-field__value">
                                            <div className="van-field__body">
                                                <input type="number" value={amount} id="ramount" inputMode="numeric"
                                                    placeholder="Please enter the amount" className="van-field__control "
                                                    name="money"
                                                    onChange={(e) =>setAmount(Number(e.target.value))}
                                                    />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-v-67caa467="" className="list m-t-10 c-row c-row-between c-flex-warp gap-2 my-3">

                                {[300, 500, 1000, 5000, 10000, 20000].map((value) => (
                                    <div style={{width: "30%", borderRadius: "5px",  border: amount === value ? "2px solid #2979F2" : "none",
                                        color: amount === value ? "#2979F2" : "#000"}}
                                        key={value}
                                        data-money={value}
                                        className={`li ${amount === value ? 'action' : ''}`}
                                        onClick={() => amountHandler(value)}
                                    >
                                        <div data-v-67caa467="" className="number" style={{ width: "100%", borderRadius: "5px",  fontSize:"1rem", boxShadow: "0px 0px 10px #d8d4d4", display: "flex", justifyContent: "center", alignItems: "center", height: "50px",}}>{value}</div>
                                    </div>
                                ))}


                                    {/* <div data-v-67caa467="" data-money="300" className="li action">
                                        <span data-v-67caa467="" className="number">300</span>
                                    </div>
                                    <div data-v-67caa467="" data-money="500" className="li">
                                        <span data-v-67caa467="" className="number">500</span>
                                    </div>
                                    <div data-v-67caa467="" data-money="1000" className="li">
                                        <span data-v-67caa467="" className="number">1000</span>
                                    </div>
                                    <div data-v-67caa467="" data-money="5000" className="li">
                                        <span data-v-67caa467="" className="number">5000</span>
                                    </div>
                                    <div data-v-67caa467="" data-money="10000" className="li">
                                        <span data-v-67caa467="" className="number">10000</span>
                                    </div>
                                    <div data-v-67caa467="" data-money="20000" className="li">
                                        <span data-v-67caa467="" className="number">20000</span>
                                    </div> */}
                                </div>
                                <div data-v-67caa467="" className="mb-2">
                                    <div data-v-67caa467="" className="des">
                                        * The UPI payment gateway offers an additional 5% bonus on First deposit.
                                    </div>

                                    <div data-v-67caa467="" className="des">
                                        If you transfer the wrong amount as instructed, the funds will be lost, and our
                                        company will not be held responsible! </div>
                                    <div data-v-67caa467="" className="des">
                                        * Note: You must deposit the exact amount as instructed in the order. The system
                                        will automatically update the bonus funds.
                                    </div>
                                </div>
                                <div data-v-67caa467="" className="btn-list c-row c-row-center p-t-30 " style={{marginBottom: "5rem",}}>
                                    
                                    <div data-v-67caa467="" className="item flex-cover" id="create-bank">
                                        <button type="submit" data-v-67caa467=""
                                            className="next-btn van-button van-button--default van-button--normal van-button--block van-button--round"
                                        >
                                            Deposit Fund 
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
    </>
  )
}

export default RechargeContent
