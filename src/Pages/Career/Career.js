import React, {Component} from "react";

export default class Career extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    getAge = () => {
        let year = new Date().getFullYear();
        let age = year - 1990;
        if(new Date().getMonth() + 1 < 10) {
            age -= 1;
        }

        return age;
    };

    render() {
        const {
            es6Rate,
            htmlRate,
            cssRate,
            react15Rate,
            react16Rate,
            androidRate,
        } = this.state;

        return (
            <div>
                <dl>
                    <dt>HNINE</dt>
                    <dd>
                        Homepage URL : https://hnine.com/
                    </dd>
                    <dt>더존비즈온</dt>
                    <dd>
                        Homepage URL : http://www.douzone.com/
                    </dd>
                </dl>
            </div>
        )
    }
}