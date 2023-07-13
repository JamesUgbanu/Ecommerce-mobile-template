/**
 * ErrorBoundary.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import AppContainer from './AppContainer';


const withErrorBoundary = <P extends any>(
    ComponentToBeRendered: React.ComponentType<P>,
    errorTemplate?: any
): any => {
    class ErrorBoundary extends Component<P, { isError: boolean, error: any, errorInfo: any }> {

        constructor(props: any) {
            super(props);
            this.state = { isError: false, error: null, errorInfo: null };
        }

        // Catch errors in any components below and re-render with error message.
        componentDidCatch(error, errorInfo) {

            this.setState({
                error: error,
                errorInfo: errorInfo
            })
        }

        static getDerivedStateFromError() {
            // Update state so the next render will show the fallback UI.
            return { isError: true };
        }

        render() {
            if (this.state.errorInfo) {
                const errorComponent = errorTemplate ? (
                    errorTemplate
                ) : (
                    <View>
                        <Text h1>Application Error</Text>
                        <Text h4>An error has occurred in this component.</Text>
                        <Text h4>{this.state.error && this.state.error.toString()}</Text>
                    </View>
                );
                if (this.state.isError && this.state.errorInfo) {
                    return <AppContainer>{errorComponent}</AppContainer>;
                }
            }
            return <ComponentToBeRendered {...(this.props)} />;
        }
    }

    return ErrorBoundary;
};

export default withErrorBoundary;