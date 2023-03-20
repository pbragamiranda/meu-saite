# frozen_string_literal: true

class WorkExperienceComponent < ViewComponent::Base
  def initialize(company:, position:, duration:)
    @company = company
    @position = position
    @duration = duration
  end
end
