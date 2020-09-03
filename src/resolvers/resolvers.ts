import { UserQuery, UserMutation } from "./user.resolver";
import {ProjectQuery, ProjectMutation} from "./project.resolver";
import {CanvasQuery, CanvasMutation} from "./canvas.resolver";
import {PatternQuery, PatternMutation} from "./pattern.resolver";
import {NestedFields} from "./nested/nestedFields";
import {TableQuery, TableMutation} from "./table.resolver";
import {CompanyQuery, CompanyMutation} from "./company.resolver";
import {ActorQuery, ActorMutation} from "./actor.resolver";
import {ValuePropositionQuery, ValuePropositionMutation} from "./valueProposition.resolver";
import {StrategyQuery, StrategyMutation} from "./strategy.resolver";
import {StrategyPatternQuery, StrategyPatternMutation} from "./strategyPattern.resolver";
import {ValueCreationQuery, ValueCreationMutation} from "./valueCreation.resolver";
import {ValueDeliveryQuery, ValueDeliveryMutation} from "./valueDelivery.resolver";
import {RevenueQuery, RevenueMutation} from "./revenue.resolver";
import {ExpenseQuery, ExpenseMutation} from "./expense.resolver";
import {NetworkEffectQuery, NetworkEffectMutation} from "./networkEffect.resolver";
import {RegulatoryQuery, RegulatoryMutation} from "./regulatory.resolver";
import {TechnicalInfrastructureQuery, TechnicalInfrastructureMutation} from "./technicalInfrastructure";

const Query = {
    ...UserQuery,
    ...ProjectQuery,
    ...CanvasQuery,
    ...PatternQuery,
    ...TableQuery,
    ...CompanyQuery,
    ...ActorQuery,
    ...ValuePropositionQuery,
    ...StrategyQuery,
    ...StrategyPatternQuery,
    ...ValueCreationQuery,
    ...ValueDeliveryQuery,
    ...RevenueQuery,
    ...ExpenseQuery,
    ...NetworkEffectQuery,
    ...RegulatoryQuery,
    ...TechnicalInfrastructureQuery
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
    ...StrategyMutation,
    ...StrategyPatternMutation,
    ...ValueCreationMutation,
    ...ValueDeliveryMutation,
    ...RevenueMutation,
    ...ExpenseMutation,
    ...NetworkEffectMutation,
    ...RegulatoryMutation,
    ...TechnicalInfrastructureMutation

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
