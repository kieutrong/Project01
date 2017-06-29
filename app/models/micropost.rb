class Micropost < ApplicationRecord
  belongs_to :user

  has_many :comments, dependent: :destroy

  scope :order_by, ->{order(created_at: :desc )}
  scope :feed_by_user, ->(following_ids, id) do
    where("user_id IN (?) OR user_id = ?", following_ids, id)
  end

  mount_uploader :picture, PictureUploader

  validates :user_id, presence: true
  validates :content, presence: true, length: {maximum: Settings.micropost.maximum_length_content}
  validate :picture_size

  private

  def picture_size
    if picture.size > Settings.micropost.maximum_megabytes.megabytes
      errors.add :picture, t(".mini_magick_processing_error")
    end
  end
end
