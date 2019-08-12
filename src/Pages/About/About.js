import React, {Component} from "react";
import StarRatingComponent from 'react-star-rating-component';

export default class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            es6Rate : 4,
            htmlRate : 4,
            cssRate : 3,
            react15Rate : 5,
            react16Rate : 2,
            androidRate : 2,
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
                <h5>엄 길 용</h5>
                <em>Um Kil Yong</em>
                1990.10.27 {`만 ${this.getAge()}`}
                <a href="mailto:dev.ekyong@gmail.com">dev.ekyong@gmail.com</a>
                Web Front-End Developer

                2015년에 Android를 시작으로 개발을 시작했고 2016년부터 포지션을 변경하여 Front-end 개발

                <hr/>

                <h5>보유기술</h5>

                ES6
                <StarRatingComponent
                    name="es6Rate"
                    starCount={5}
                    value={es6Rate}
                />
                HTML
                <StarRatingComponent
                    name="htmlRate"
                    starCount={5}
                    value={htmlRate}
                />
                CSS
                <StarRatingComponent
                    name="cssRate"
                    starCount={5}
                    value={cssRate}
                />
                React 15.x
                <StarRatingComponent
                    name="reactRate"
                    starCount={5}
                    value={react15Rate}
                />
                React 16.x
                <StarRatingComponent
                    name="reactRate"
                    starCount={5}
                    value={react16Rate}
                />
                Android
                <StarRatingComponent
                    name="androidRate"
                    starCount={5}
                    value={androidRate}
                />
            </div>
        )
    }
}