# frozen_string_literal: true

class NumberedHeadingComponent < ViewComponent::Base
  def initialize(number:, title:)
    @number = number
    @title = title
  end

end
