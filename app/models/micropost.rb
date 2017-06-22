class Micropost < ApplicationRecord
  belongs_to :user

  scope :feed_by_user, ->(id){where("user_id = #{id}").order(created_at: :asc )}
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
