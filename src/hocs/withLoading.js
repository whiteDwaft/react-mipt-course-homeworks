import React from 'react';

export const withLoading = (Component) => {
    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                loading: false,
                error: null
            }
        }

        execute = (callback) => {
            this.setState({loading: true});
            return async (...args) => {
                try {
                    return await callback(...args);
                } finally {
                    this.setState({loading: false});
                }
            }
        };

        render() {
            return <Component {...this.props}
                              loading={this.state.loading}
                              error={this.state.error}
                              execute={this.execute}/>;
        }
    }
};
