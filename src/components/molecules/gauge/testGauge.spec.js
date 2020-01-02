import React from "react";
import LiveGauge from './Gauge'
import { render } from "@testing-library/react";
import { ProgressLayer } from "./Progress";

describe('renders without crashing', () => {
    it('should render dynamic svg circles ', () => {
        render(
            <LiveGauge />
        )
    });
});

