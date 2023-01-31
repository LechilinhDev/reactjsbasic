import React from "react";
class ChildComponent extends React.Component {

    state = {
        showJob: false
    }

    handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }
    handleDeleteData = (job) => {
        this.props.deleteJob(job);
    }

    render() {
        let { name, age, AJobs } = this.props;
        let { showJob } = this.state;
        return (
            <>
                <h1>Child Component {name} - Age : {age}</h1>
                {showJob === false ? <div><button onClick={() => this.handleShowHide()}>Show</button></div>
                    :
                    <>
                        <div className="Job-list">
                            {
                                AJobs.map((item, index) => {
                                    return (
                                        <div key={item.id} className="listJob-Item">
                                            <h4>{item.title}- {item.salary}$ <button onClick={() => this.handleDeleteData(item)}>x</button></h4>

                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                    </>
                }




            </>

        )
    }
}
// const ChildComponent = (props) => {
//     let { AJobs } = props;
//     return (

//         <div className="AllJobs-list">

//             {
//                 AJobs.map((item) => {
//                     if (item.salary > 1000) {
//                         return (


//                             <div key={item.id} className="item-jobs">
//                                 <h3>{item.title}</h3>
//                                 <p>{item.salary}</p>
//                             </div>



//                         )
//                     }

//                 })
//             }

//         </div>
//     )
// }

export default ChildComponent;