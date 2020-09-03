/* 
query {
	getAllCanvases{
    table_id{
      key_partner_entry_ids{
        text
        note
        createdAt
      }
      reventue_stream_entry_ids{
        text
        note
        createdAt
      }
      key_activity_entry_ids{
        text
        note
        createdAt
      }
      customer_relationship_entry_ids{
        text
        note
        createdAt
      }
      value_proposition_entry_ids{
        text
        note
        createdAt
      }
      cost_structure_entry_ids{
        text
        note
        createdAt
      }
      customer_segment_entry_ids{
        text
        note
        createdAt
      }
      key_resource_entry_ids{
        text
        note
        createdAt
      }
      channel_entry_ids{
        text
        note
        createdAt
      }
      
    }
  }
}
 */

export const Table = {
    actor_entry_ids: (parent, args, ctx, info) => {
        return ctx.db.table({id: parent.id}).actor_entry_ids();
    },

    value_proposition_entry_ids: (parent, args, ctx, info) => {
        return ctx.db.table({id: parent.id}).value_proposition_entry_ids();
    },

    value_creation_entry_ids: (parent, args, ctx, info) => {
        return ctx.db.table({id: parent.id}).value_creation_entry_ids();
    },

    value_delivery_entry_ids: (parent, args, ctx, info) => {
        return ctx.db.table({id: parent.id}).value_delivery_entry_ids();
    },

    revenue_entry_ids: (parent, args, ctx, info) => {
        return ctx.db.table({id: parent.id}).revenue_entry_ids();
    },

    expense_entry_ids: (parent, args, ctx, info) => {
        return ctx.db.table({id: parent.id}).expense_entry_ids();
    },

    network_effect_entry_ids: (parent, args, ctx, info) => {
        return ctx.db.table({id: parent.id}).network_effect_entry_ids();
    },

    technical_infrastructure_entry_ids: (parent, args, ctx, info) => {
        return ctx.db.table({id: parent.id}).technical_infrastructure_entry_ids();
    },

    regulatory_entry_ids: (parent, args, ctx, info) => {
        return ctx.db.table({id: parent.id}).regulatory_entry_ids();
    },
};