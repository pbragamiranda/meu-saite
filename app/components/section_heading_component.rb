# frozen_string_literal: true

class SectionHeadingComponent < ViewComponent::Base
  def initialize(title:)
    @title = title
  end

end
