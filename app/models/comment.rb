class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :micropost
  has_many :comment_child, class_name: Comment.name,
                          foreign_key: "manager_parent_id"
  belongs_to :manager_parent, class_name: Comment.name, optional: true
  validates :content, presence: true
end
