import { kratosApiPath } from '$lib/variables';

import type {
    SelfServiceRegistrationFlow,
    SelfServiceLoginFlow,
    UiNodeAttributes,
    UiNodeInputAttributes,
} from '@ory/kratos-client';

export type {
    SelfServiceRegistrationFlow,
    SelfServiceLoginFlow,
    UiContainer,
    UiNode,
    UiNodeInputAttributes,
} from '@ory/kratos-client';

export type FlowType = 'login' | 'registration';
type SupportedFlows = SelfServiceRegistrationFlow | SelfServiceLoginFlow;
type FlowStarter<T extends SupportedFlows> = (fetch?: typeof window.fetch) => Promise<T>;
type FlowSubmitter<T extends SupportedFlows> = (
    flow: T,
    data: { [key: string]: string }
) => Promise<void>;

export const isUiNodeInputAttributes = (
    attributes: UiNodeAttributes
): attributes is UiNodeInputAttributes => attributes.node_type === 'input';

const startFlow =
    (flowType: FlowType) =>
    async <T extends SupportedFlows>(fetch: typeof window.fetch = window.fetch): Promise<T> => {
        const result = await fetch(`${kratosApiPath}/self-service/${flowType}/browser`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                Accept: 'application/json',
            },
        });
        return result.json();
    };

const submitFlow = async <T extends SupportedFlows>(
    flow: T,
    data: { [key: string]: string }
): Promise<void> => {
    const result = await window.fetch(flow.ui.action, {
        method: flow.ui.method,
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!result.ok) {
        throw new Error(await result.text());
    }
};

export const startRegistrationFlow: FlowStarter<SelfServiceRegistrationFlow> =
    startFlow('registration');
export const submitRegistrationFlow: FlowSubmitter<SelfServiceRegistrationFlow> =
    submitFlow;

export const startLoginFlow: FlowStarter<SelfServiceLoginFlow> =
    startFlow('login');
export const submitLoginFlow: FlowSubmitter<SelfServiceLoginFlow> =
    submitFlow;
