module UsersHelper
  def gravatar_for user, options = {size: Settings.user.size}
    gravatar_id = Digest::MD5::hexdigest user.email.downcase
    size = options[:size]
    gravatar_url = "https://secure.gravatar.com/avatar/#{gravatar_id}?s=#{size}"
    image_tag gravatar_url, alt: user.name, class: "gravatar"
  end

  # def comments_for micropost
  #   micropost.comments.select(:id, :content, :user_id, :micropost :created_at)
  #   #kieu comments se goi den comment
  # end
end
