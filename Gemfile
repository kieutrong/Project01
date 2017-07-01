source "https://rubygems.org"

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem "bcrypt", "3.1.11"
gem "carrierwave", "1.1.0"
gem "config", "~> 1.0"
gem "bootstrap-sass", "3.3.7"
gem "bootstrap-will_paginate", "1.0.0"
gem "coffee-rails", "~> 4.2"
gem "faker", "1.7.3"
gem "fog", "1.40.0"
gem "i18n-js"
gem "jbuilder", "~> 2.5"
gem "jquery-rails"
gem "letter_opener"
gem "mini_magick", "4.7.0"
gem "puma", "~> 3.7"
gem "rails", "~> 5.1.1"
gem "sass-rails", "~> 5.0"
gem "turbolinks", "~> 5"
gem "uglifier", ">= 1.3.0"
gem "will_paginate", "3.1.5"
group :development, :test do
  gem "sqlite3"
end
group :production do
  gem "pg", "0.17.1"
  gem "rails_12factor", "0.0.2"
end
gem "figaro"
gem "jquery-validation-rails"
gem "toastr-rails"

group :development, :test do
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
  gem "capybara", "~> 2.13"
  gem "selenium-webdriver"
end

group :development do
  gem "web-console", ">= 3.3.0"
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
end

gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
