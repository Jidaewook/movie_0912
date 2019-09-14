import React, { Component } from 'react';
import HomePresenter from "./HomePresenter";
import { movieApi } from '../../api';



export default class extends Component {
    state = {
        nowPlaying: null,
        upComing: null,
        popular: null,
        error: null,
        loading: true
    };

    async componentDidMount() {
        try {
            const {
                data: { results: nowPlaying }
            } = await movieApi.nowPlaying();
            //내 데이터인 nowPlaying에 movieApi에서 제공하는 nowPlaying의 데이터를 데려와 입혀두고, 아래 setState에서 갱신한다.

            const {
                data: { results: upComing }
            } = await movieApi.upcoming();
            const {
                data: { results: popular }
            } = await movieApi.popular();
            this.setState({
                nowPlaying,
                upComing,
                popular
            });
        } catch{
            this.setState({
                // null인 상태의 error값에, error 발생에 따라 error 상태값을 바꿔준다. 
                error: "Can't find movies information"
            })
        } finally {
            this.setState({
                // null인 상태의 loading값에, loading 종료에 따라 false로 바꿔준다. 

                loading: false
            })
        }
    };




    render() {
        const { nowPlaying, upComing, popular, error, loading } = this.state;
        return (
            <HomePresenter
                nowPlaying={nowPlaying}
                upComing={upComing}
                popular={popular}
                error={error}
                loading={loading}
            />        );
    };
} 