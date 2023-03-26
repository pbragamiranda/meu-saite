# frozen_string_literal: true

class SnippetRowComponent < ViewComponent::Base
  def initialize(url:, name:, description:, category:, last_updated:)
    @url = url
    @name = name
    @description = description
    @category = category
    @last_updated = last_updated
    @path = "#{@url}_path"
  end
end
