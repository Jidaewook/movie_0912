import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from "../../Components/Section";

const Container = styled.div`
    padding: 0px 10px;

`;

const HomePresenter = ({ nowPlaying, popular, upComing, loading, error }) => 

    loading ? null: (
        <Container>
            {nowPlaying && nowPlaying.length>0 && (
                <Section title = "Now Playing">
                    {nowPlaying.map(movie=> movie.title)}
                </Section>
            )}
            {upComing && upComing.length>0 && (
                <Section title = "UpComing">
                    {upComing.map(movie=> movie.title)}

                </Section>
            )}
            {popular && popular.length>0 && (
                <Section title = "Popular">
                    {popular.map(movie=> movie.title)}
                </Section>
            )}
        </Container>
    )

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    popular: PropTypes.array,
    upComing: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default HomePresenter; 