import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class Mycomponent extends React.Component {

    state = {

        allJobs: [
            { id: 'abc1', title: 'developer ReactJs', salary: '1000' },
            { id: 'abc2', title: 'backend developer', salary: '1500' },
            { id: 'abc3', title: 'Project manager', salary: '2000' }
        ]
    }
    addNewJob = (job) => {
        this.setState({
            allJobs: [...this.state.allJobs, job]
        })


    }

    deleteJob = (job) => {
        let currentJob = this.state.allJobs;
        currentJob = currentJob.filter(e => e.id !== job.id);

        console.log(currentJob);
        this.setState({
            allJobs: currentJob
        })


    }

    render() {
        return (
            <>
                <AddComponent addNewJob={this.addNewJob} />


                < ChildComponent AJobs={this.state.allJobs} deleteJob={this.deleteJob} />


            </>
        )


    }
}

export default Mycomponent;