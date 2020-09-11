import { Prisma} from '../../generated/prisma-client';
export interface Context
{
    db: Prisma;
}

export const StrategyPattern = {
    pattern_id: (parent, args, ctx: Context, info) => {
        return ctx.db.strategyPattern({id: parent.id}).pattern_id();
    },

    strategy_id: (parent, args, ctx: Context, info) => {
        return ctx.db.strategyPattern({id: parent.id}).strategy_id();
    }
};