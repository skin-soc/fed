# frozen_string_literal: true

module BrandingHelper
  def logo_as_symbol(version = :icon)
    case version
    when :icon
      _logo_as_symbol_icon
    when :wordmark
      _logo_as_symbol_wordmark
    end
  end

  def _logo_as_symbol_wordmark
    image_pack_tag('logo.svg', alt: 'The Antisocial Network', href: '#logo-symbol-wordmark', viewBox: '0 0 250 250', class: 'logo logo--wordmark')
  end

  def _logo_as_symbol_icon
    content_tag(:svg, tag(:use, href: '#logo-symbol-icon'), viewBox: '0 0 95 95', class: 'logo logo--icon')
  end

  def render_logo
    image_pack_tag('logo.svg', alt: 'The Antisocial Network', class: 'logo logo--icon')
  end

  def render_symbol(version = :icon)
    image_pack_tag('logo.svg', alt: 'The Antisocial Network', href: '#logo-symbol-wordmark', viewBox: '0 0 250 250', class: 'logo logo--wordmark')
  end
end
