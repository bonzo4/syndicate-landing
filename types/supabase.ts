export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      _guild_tags: {
        Row: {
          guild_id: string
          tag: string
        }
        Insert: {
          guild_id: string
          tag: string
        }
        Update: {
          guild_id?: string
          tag?: string
        }
        Relationships: [
          {
            foreignKeyName: "_guild_tags_guild_id_fkey"
            columns: ["guild_id"]
            referencedRelation: "guilds"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "_guild_tags_tag_fkey"
            columns: ["tag"]
            referencedRelation: "tags"
            referencedColumns: ["name"]
          }
        ]
      }
      _guild_users: {
        Row: {
          guild_id: string
          user_id: string
        }
        Insert: {
          guild_id: string
          user_id: string
        }
        Update: {
          guild_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "_guild_users_guild_id_fkey"
            columns: ["guild_id"]
            referencedRelation: "guilds"
            referencedColumns: ["id"]
          }
        ]
      }
      _news_tags: {
        Row: {
          created_at: string
          news_id: number
          tag: string
        }
        Insert: {
          created_at?: string
          news_id?: number
          tag: string
        }
        Update: {
          created_at?: string
          news_id?: number
          tag?: string
        }
        Relationships: [
          {
            foreignKeyName: "_news_tags_news_id_fkey"
            columns: ["news_id"]
            referencedRelation: "discord_news"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "_news_tags_tag_fkey"
            columns: ["tag"]
            referencedRelation: "tags"
            referencedColumns: ["name"]
          }
        ]
      }
      _news_vanity_tags: {
        Row: {
          news_id: number
          tag: string
        }
        Insert: {
          news_id?: number
          tag: string
        }
        Update: {
          news_id?: number
          tag?: string
        }
        Relationships: [
          {
            foreignKeyName: "_news_vanity_tags_news_id_fkey"
            columns: ["news_id"]
            referencedRelation: "discord_news"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "_news_vanity_tags_tag_fkey"
            columns: ["tag"]
            referencedRelation: "vanity_tags"
            referencedColumns: ["name"]
          }
        ]
      }
      _user_tags: {
        Row: {
          tag: string
          user_id: string
        }
        Insert: {
          tag: string
          user_id: string
        }
        Update: {
          tag?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "_user_tags_tag_fkey"
            columns: ["tag"]
            referencedRelation: "tags"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "_user_tags_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "discord_users"
            referencedColumns: ["id"]
          }
        ]
      }
      bot_errors: {
        Row: {
          created_at: string
          guild_id: string | null
          id: number
          message: string
          news_id: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          guild_id?: string | null
          id?: number
          message: string
          news_id?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          guild_id?: string | null
          id?: number
          message?: string
          news_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bot_errors_guild_id_fkey"
            columns: ["guild_id"]
            referencedRelation: "guilds"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bot_errors_news_id_fkey"
            columns: ["news_id"]
            referencedRelation: "discord_news"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bot_errors_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "discord_users"
            referencedColumns: ["id"]
          }
        ]
      }
      bot_metrics: {
        Row: {
          created_at: string
          guilds_joined: number
          id: string
          members_added: number
        }
        Insert: {
          created_at?: string
          guilds_joined: number
          id: string
          members_added: number
        }
        Update: {
          created_at?: string
          guilds_joined?: number
          id?: string
          members_added?: number
        }
        Relationships: []
      }
      direct_channels: {
        Row: {
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "direct_channels_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "discord_users"
            referencedColumns: ["id"]
          }
        ]
      }
      directs: {
        Row: {
          created_at: string
          embed_id: number
          id: number
          order: number
        }
        Insert: {
          created_at?: string
          embed_id: number
          id?: number
          order?: number
        }
        Update: {
          created_at?: string
          embed_id?: number
          id?: number
          order?: number
        }
        Relationships: [
          {
            foreignKeyName: "directs_embed_id_fkey"
            columns: ["embed_id"]
            referencedRelation: "news_embeds"
            referencedColumns: ["id"]
          }
        ]
      }
      discord_news: {
        Row: {
          approved: boolean
          approved_at: string | null
          created_at: string
          created_by: string
          id: number
          schedule: string
          title: string
        }
        Insert: {
          approved?: boolean
          approved_at?: string | null
          created_at?: string
          created_by: string
          id?: number
          schedule: string
          title: string
        }
        Update: {
          approved?: boolean
          approved_at?: string | null
          created_at?: string
          created_by?: string
          id?: number
          schedule?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "discord_news_created_by_fkey"
            columns: ["created_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      discord_users: {
        Row: {
          created_at: string
          icon: string | null
          id: string
          name: string
          referral_code: string | null
          staff_role: Database["public"]["Enums"]["staff_role_type"] | null
          updated_at: string
          user_id: string | null
          user_role: Database["public"]["Enums"]["user_role_type"]
        }
        Insert: {
          created_at?: string
          icon?: string | null
          id: string
          name: string
          referral_code?: string | null
          staff_role?: Database["public"]["Enums"]["staff_role_type"] | null
          updated_at?: string
          user_id?: string | null
          user_role?: Database["public"]["Enums"]["user_role_type"]
        }
        Update: {
          created_at?: string
          icon?: string | null
          id?: string
          name?: string
          referral_code?: string | null
          staff_role?: Database["public"]["Enums"]["staff_role_type"] | null
          updated_at?: string
          user_id?: string | null
          user_role?: Database["public"]["Enums"]["user_role_type"]
        }
        Relationships: [
          {
            foreignKeyName: "discord_users_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      guild_referrals: {
        Row: {
          created_at: string
          guild_id: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          guild_id: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          guild_id?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "guild_referrals_guild_id_fkey"
            columns: ["guild_id"]
            referencedRelation: "guilds"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "guild_referrals_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "discord_users"
            referencedColumns: ["id"]
          }
        ]
      }
      guild_settings: {
        Row: {
          category_id: string | null
          created_at: string
          guild_id: string
          system_id: string | null
          updated_at: string
        }
        Insert: {
          category_id?: string | null
          created_at?: string
          guild_id: string
          system_id?: string | null
          updated_at?: string
        }
        Update: {
          category_id?: string | null
          created_at?: string
          guild_id?: string
          system_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "guild_settings_guild_id_fkey"
            columns: ["guild_id"]
            referencedRelation: "guilds"
            referencedColumns: ["id"]
          }
        ]
      }
      guilds: {
        Row: {
          banner: string | null
          created_at: string
          icon: string | null
          id: string
          invite: string | null
          joined_at: string
          left_at: string | null
          member_count: number
          name: string
          updated_at: string
        }
        Insert: {
          banner?: string | null
          created_at?: string
          icon?: string | null
          id: string
          invite?: string | null
          joined_at: string
          left_at?: string | null
          member_count: number
          name: string
          updated_at?: string
        }
        Update: {
          banner?: string | null
          created_at?: string
          icon?: string | null
          id?: string
          invite?: string | null
          joined_at?: string
          left_at?: string | null
          member_count?: number
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      inputs: {
        Row: {
          created_at: string
          embed_id: number
          id: number
          order: number
          question: string
        }
        Insert: {
          created_at?: string
          embed_id: number
          id?: number
          order?: number
          question: string
        }
        Update: {
          created_at?: string
          embed_id?: number
          id?: number
          order?: number
          question?: string
        }
        Relationships: [
          {
            foreignKeyName: "inputs_embed_id_fkey"
            columns: ["embed_id"]
            referencedRelation: "news_embeds"
            referencedColumns: ["id"]
          }
        ]
      }
      interactions: {
        Row: {
          created_at: string
          direct_id: number | null
          guild_id: string | null
          id: string
          input: string | null
          input_id: number | null
          news_id: number
          poll_choice_id: number | null
          poll_id: number | null
          promo_action: Database["public"]["Enums"]["promo_action_type"] | null
          promo_id: number | null
          quiz_choice_id: number | null
          quiz_id: number | null
          redirect_id: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          direct_id?: number | null
          guild_id?: string | null
          id?: string
          input?: string | null
          input_id?: number | null
          news_id: number
          poll_choice_id?: number | null
          poll_id?: number | null
          promo_action?: Database["public"]["Enums"]["promo_action_type"] | null
          promo_id?: number | null
          quiz_choice_id?: number | null
          quiz_id?: number | null
          redirect_id?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          direct_id?: number | null
          guild_id?: string | null
          id?: string
          input?: string | null
          input_id?: number | null
          news_id?: number
          poll_choice_id?: number | null
          poll_id?: number | null
          promo_action?: Database["public"]["Enums"]["promo_action_type"] | null
          promo_id?: number | null
          quiz_choice_id?: number | null
          quiz_id?: number | null
          redirect_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "interactions_direct_id_fkey"
            columns: ["direct_id"]
            referencedRelation: "directs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interactions_guild_id_fkey"
            columns: ["guild_id"]
            referencedRelation: "guilds"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interactions_input_id_fkey"
            columns: ["input_id"]
            referencedRelation: "inputs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interactions_news_id_fkey"
            columns: ["news_id"]
            referencedRelation: "discord_news"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interactions_poll_choice_id_fkey"
            columns: ["poll_choice_id"]
            referencedRelation: "poll_choices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interactions_poll_id_fkey"
            columns: ["poll_id"]
            referencedRelation: "polls"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interactions_promo_id_fkey"
            columns: ["promo_id"]
            referencedRelation: "promos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interactions_quiz_choice_id_fkey"
            columns: ["quiz_choice_id"]
            referencedRelation: "quiz_choices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interactions_quiz_id_fkey"
            columns: ["quiz_id"]
            referencedRelation: "quizzes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interactions_redirect_id_fkey"
            columns: ["redirect_id"]
            referencedRelation: "redirects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interactions_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "discord_users"
            referencedColumns: ["id"]
          }
        ]
      }
      links: {
        Row: {
          created_at: string | null
          embed_id: number
          emoji: string | null
          id: number
          order: number
          text: string
          url: string
        }
        Insert: {
          created_at?: string | null
          embed_id: number
          emoji?: string | null
          id?: number
          order?: number
          text: string
          url: string
        }
        Update: {
          created_at?: string | null
          embed_id?: number
          emoji?: string | null
          id?: number
          order?: number
          text?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "links_embed_id_fkey"
            columns: ["embed_id"]
            referencedRelation: "news_embeds"
            referencedColumns: ["id"]
          }
        ]
      }
      mention_roles: {
        Row: {
          created_at: string
          guild_id: string
          id: string
        }
        Insert: {
          created_at?: string
          guild_id: string
          id: string
        }
        Update: {
          created_at?: string
          guild_id?: string
          id?: string
        }
        Relationships: []
      }
      news_channels: {
        Row: {
          created_at: string
          guild_id: string
          id: string
        }
        Insert: {
          created_at?: string
          guild_id: string
          id: string
        }
        Update: {
          created_at?: string
          guild_id?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "news_channels_guild_id_fkey"
            columns: ["guild_id"]
            referencedRelation: "guild_settings"
            referencedColumns: ["guild_id"]
          }
        ]
      }
      news_embeds: {
        Row: {
          content: Json
          created_at: string
          id: number
          interaction_types:
            | Database["public"]["Enums"]["interaction_type"][]
            | null
          news_id: number
          news_image: boolean
          order: number
        }
        Insert: {
          content: Json
          created_at?: string
          id?: number
          interaction_types?:
            | Database["public"]["Enums"]["interaction_type"][]
            | null
          news_id: number
          news_image?: boolean
          order: number
        }
        Update: {
          content?: Json
          created_at?: string
          id?: number
          interaction_types?:
            | Database["public"]["Enums"]["interaction_type"][]
            | null
          news_id?: number
          news_image?: boolean
          order?: number
        }
        Relationships: [
          {
            foreignKeyName: "news_embeds_news_id_fkey"
            columns: ["news_id"]
            referencedRelation: "discord_news"
            referencedColumns: ["id"]
          }
        ]
      }
      news_metrics: {
        Row: {
          interactions: number
          news_id: number
          views: number
        }
        Insert: {
          interactions?: number
          news_id?: number
          views?: number
        }
        Update: {
          interactions?: number
          news_id?: number
          views?: number
        }
        Relationships: [
          {
            foreignKeyName: "news_metrics_news_id_fkey"
            columns: ["news_id"]
            referencedRelation: "discord_news"
            referencedColumns: ["id"]
          }
        ]
      }
      news_previews: {
        Row: {
          clicks: number
          created_at: string
          inputs: number
          news_id: number
          slug: string
          tags: string[]
          thumbnail: string
          title: string
          views: number
        }
        Insert: {
          clicks?: number
          created_at?: string
          inputs?: number
          news_id?: number
          slug: string
          tags: string[]
          thumbnail: string
          title: string
          views?: number
        }
        Update: {
          clicks?: number
          created_at?: string
          inputs?: number
          news_id?: number
          slug?: string
          tags?: string[]
          thumbnail?: string
          title?: string
          views?: number
        }
        Relationships: [
          {
            foreignKeyName: "news_previews_news_id_fkey"
            columns: ["news_id"]
            referencedRelation: "discord_news"
            referencedColumns: ["id"]
          }
        ]
      }
      news_trackers: {
        Row: {
          created_at: string
          guild_id: string | null
          id: number
          image_url: string | null
          news_id: number
          user_id: string | null
        }
        Insert: {
          created_at?: string
          guild_id?: string | null
          id?: number
          image_url?: string | null
          news_id: number
          user_id?: string | null
        }
        Update: {
          created_at?: string
          guild_id?: string | null
          id?: number
          image_url?: string | null
          news_id?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "news_trackers_guild_id_fkey"
            columns: ["guild_id"]
            referencedRelation: "guilds"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "news_trackers_news_id_fkey"
            columns: ["news_id"]
            referencedRelation: "discord_news"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "news_trackers_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "discord_users"
            referencedColumns: ["id"]
          }
        ]
      }
      poll_choices: {
        Row: {
          created_at: string
          emoji: string
          id: number
          poll_id: number
          text: string
          votes: number
        }
        Insert: {
          created_at?: string
          emoji: string
          id?: number
          poll_id: number
          text: string
          votes?: number
        }
        Update: {
          created_at?: string
          emoji?: string
          id?: number
          poll_id?: number
          text?: string
          votes?: number
        }
        Relationships: [
          {
            foreignKeyName: "poll_choices_poll_id_fkey"
            columns: ["poll_id"]
            referencedRelation: "polls"
            referencedColumns: ["id"]
          }
        ]
      }
      polls: {
        Row: {
          created_at: string
          embed_id: number
          id: number
          order: number
          question: string
        }
        Insert: {
          created_at?: string
          embed_id: number
          id?: number
          order?: number
          question: string
        }
        Update: {
          created_at?: string
          embed_id?: number
          id?: number
          order?: number
          question?: string
        }
        Relationships: [
          {
            foreignKeyName: "polls_embed_id_fkey"
            columns: ["embed_id"]
            referencedRelation: "news_embeds"
            referencedColumns: ["id"]
          }
        ]
      }
      promos: {
        Row: {
          created_at: string
          embed_id: number
          id: number
          order: number
          tweet_id: string | null
          tweet_url: string | null
          twitter_id: string | null
          twitter_url: string | null
        }
        Insert: {
          created_at?: string
          embed_id: number
          id?: number
          order?: number
          tweet_id?: string | null
          tweet_url?: string | null
          twitter_id?: string | null
          twitter_url?: string | null
        }
        Update: {
          created_at?: string
          embed_id?: number
          id?: number
          order?: number
          tweet_id?: string | null
          tweet_url?: string | null
          twitter_id?: string | null
          twitter_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "promos_embed_id_fkey"
            columns: ["embed_id"]
            referencedRelation: "news_embeds"
            referencedColumns: ["id"]
          }
        ]
      }
      quiz_choices: {
        Row: {
          created_at: string
          emoji: string
          id: number
          quiz_id: number
          text: string
          votes: number
        }
        Insert: {
          created_at?: string
          emoji: string
          id?: number
          quiz_id: number
          text: string
          votes?: number
        }
        Update: {
          created_at?: string
          emoji?: string
          id?: number
          quiz_id?: number
          text?: string
          votes?: number
        }
        Relationships: [
          {
            foreignKeyName: "quiz_choices_quiz_id_fkey"
            columns: ["quiz_id"]
            referencedRelation: "quizzes"
            referencedColumns: ["id"]
          }
        ]
      }
      quizzes: {
        Row: {
          answer: string
          created_at: string
          embed_id: number
          id: number
          order: number
          question: string
        }
        Insert: {
          answer: string
          created_at?: string
          embed_id: number
          id?: number
          order?: number
          question: string
        }
        Update: {
          answer?: string
          created_at?: string
          embed_id?: number
          id?: number
          order?: number
          question?: string
        }
        Relationships: [
          {
            foreignKeyName: "quizzes_embed_id_fkey"
            columns: ["embed_id"]
            referencedRelation: "news_embeds"
            referencedColumns: ["id"]
          }
        ]
      }
      redirects: {
        Row: {
          clicks: number
          created_at: string | null
          guild_id: string | null
          id: number
          link_id: number | null
          news_id: number
          url: string
          user_id: string | null
        }
        Insert: {
          clicks?: number
          created_at?: string | null
          guild_id?: string | null
          id?: number
          link_id?: number | null
          news_id: number
          url: string
          user_id?: string | null
        }
        Update: {
          clicks?: number
          created_at?: string | null
          guild_id?: string | null
          id?: number
          link_id?: number | null
          news_id?: number
          url?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "redirects_guild_id_fkey"
            columns: ["guild_id"]
            referencedRelation: "guilds"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "redirects_link_id_fkey"
            columns: ["link_id"]
            referencedRelation: "links"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "redirects_news_id_fkey"
            columns: ["news_id"]
            referencedRelation: "discord_news"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "redirects_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "discord_users"
            referencedColumns: ["id"]
          }
        ]
      }
      tags: {
        Row: {
          created_at: string
          name: string
        }
        Insert: {
          created_at?: string
          name: string
        }
        Update: {
          created_at?: string
          name?: string
        }
        Relationships: []
      }
      vanity_tags: {
        Row: {
          created_at: string
          name: string
        }
        Insert: {
          created_at?: string
          name: string
        }
        Update: {
          created_at?: string
          name?: string
        }
        Relationships: []
      }
      views: {
        Row: {
          created_at: string
          guild_id: string | null
          id: string
          news_id: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          guild_id?: string | null
          id?: string
          news_id?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          guild_id?: string | null
          id?: string
          news_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "views_guild_id_fkey"
            columns: ["guild_id"]
            referencedRelation: "guilds"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "views_news_id_fkey"
            columns: ["news_id"]
            referencedRelation: "discord_news"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "views_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "discord_users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      increment_views: {
        Args: {
          discord_news_id: number
        }
        Returns: undefined
      }
      is_admin: {
        Args: {
          user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      interaction_type: "POLL" | "QUIZ" | "INPUT" | "DIRECT" | "PROMO" | "LINK"
      log_type: "INFO" | "WARN" | "ERROR"
      promo_action_type: "LIKE" | "RETWEET" | "FOLLOW"
      staff_role_type:
        | "AFFILIATE"
        | "WRITER"
        | "MOD"
        | "ADMIN"
        | "TRIAL"
        | "AMBASSADOR"
      user_role_type: "VIEWER" | "STAFF"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
