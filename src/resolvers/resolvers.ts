import { UserQuery, UserMutation } from "./user.resolver";
import {ProjectQuery, ProjectMutation} from "./project.resolver";
import {CanvasQuery, CanvasMutation} from "./canvas.resolver";
import {PatternQuery, PatternMutation} from "./pattern.resolver";
import {NestedFields} from "./nested/nestedFields";
import {TableQuery, TableMutation} from "./table.resolver";
import {CompanyQuery, CompanyMutation} from "./company.resolver";
import {ActorQuery, ActorMutation} from "./actor.resolver";
import {ValuePropositionQuery, ValuePropositionMutation} from "./valueProposition.resolver";
import {StrategyQuery, StrategyMutation} from "./strategy.resolver"

const Query = {
    ...UserQuery,
    ...ProjectQuery,
    ...CanvasQuery,
    ...PatternQuery,
    ...TableQuery,
    ...CompanyQuery,
    ...ActorQuery,
    ...ValuePropositionQuery,
    ...StrategyQuery
}

const Mutation = {
    ...UserMutation,
    ...ProjectMutation,
    ...CanvasMutation,
    ...PatternMutation,
    ...TableMutation,
    ...CompanyMutation,
    ...ActorMutation,
    ...ValuePropositionMutation,
    ...StrategyMutation

}

// const Subscription = {
//
//}

export const Resolver = {
    Query,
    Mutation,
    // Subscription,
    ...NestedFields
};
